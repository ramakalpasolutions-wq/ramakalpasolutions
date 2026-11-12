import { getMailer, leadRecipients, mailFrom } from "@/lib/mailer";
import { siteConfig } from "@/config/site";
import { fieldErrors, submissionSchema, type Submission } from "@/lib/lead-schema";
import { rateLimit } from "@/lib/rate-limit";

const THANK_YOU_PATH = "/thank-you/";

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function leadRows(lead: Submission): [string, string][] {
  if (lead.type === "audit") {
    return [
      ["Type", "Free website audit"],
      ["Website", lead.website],
      ["Phone", lead.phone],
      ["Page", lead.source ?? ""],
    ];
  }
  return [
    ["Type", "Project enquiry"],
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email ?? ""],
    ["Service", lead.service],
    ["Budget", lead.budget],
    ["Message", lead.message ?? ""],
    ["Page", lead.source ?? ""],
  ];
}

async function sendEmail(lead: Submission, rows: [string, string][]): Promise<boolean> {
  const mailer = getMailer();
  const to = leadRecipients();
  if (!mailer || to.length === 0) return false;
  const subject =
    lead.type === "audit"
      ? `New website audit request: ${lead.website}`
      : `New lead: ${lead.name} – ${lead.service}`;

  const html = `
    <h2 style="font-family:sans-serif;color:#1A1523">${escapeHtml(subject)}</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .filter(([, v]) => v)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>`;
  const text = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  try {
    await mailer.sendMail({
      from: mailFrom(),
      to,
      subject,
      html,
      text,
      // Hitting "Reply" in your inbox answers the customer directly.
      ...(lead.type === "lead" && lead.email ? { replyTo: lead.email } : {}),
    });
    return true;
  } catch (err) {
    const e = err as { code?: string; responseCode?: number; message?: string };
    console.error("[lead] SMTP error:", e.code ?? "", e.responseCode ?? "", e.message ?? err);
    return false;
  }
}

async function appendToSheet(lead: Submission, submittedAt: string): Promise<boolean> {
  const url = process.env.SHEETS_WEBHOOK_URL;
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ submittedAt, ...lead, company_website: undefined }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) console.error("[lead] Sheets webhook returned", res.status);
    return res.ok;
  } catch (err) {
    console.error("[lead] Sheets webhook failed:", err);
    return false;
  }
}

async function readBody(request: Request): Promise<{ data: Record<string, unknown>; isForm: boolean }> {
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return { data: (await request.json()) as Record<string, unknown>, isForm: false };
  }
  // Native form post (works even if JavaScript fails to load).
  const form = await request.formData();
  const data: Record<string, unknown> = {};
  for (const [key, value] of form.entries()) {
    if (typeof value === "string") data[key] = value;
  }
  return { data, isForm: true };
}

function respond(isForm: boolean, request: Request, status: number, body: Record<string, unknown>) {
  if (isForm) {
    const target = status === 200 ? THANK_YOU_PATH : "/contact/?error=1";
    return Response.redirect(new URL(target, request.url), 303);
  }
  return Response.json(body, { status });
}

export async function POST(request: Request) {
  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";

  let parsed: { data: Record<string, unknown>; isForm: boolean };
  try {
    parsed = await readBody(request);
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  const { data, isForm } = parsed;

  // Honeypot filled in: pretend success so bots don't retry, but drop the lead.
  if (typeof data.company_website === "string" && data.company_website.length > 0) {
    return respond(isForm, request, 200, { ok: true, redirect: THANK_YOU_PATH });
  }

  const limit = rateLimit(ip, Date.now());
  if (!limit.ok) {
    return Response.json(
      { ok: false, error: "Too many submissions. Please call or WhatsApp us instead." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  const result = submissionSchema.safeParse(data);
  if (!result.success) {
    return respond(isForm, request, 422, { ok: false, error: "Please check the form.", fields: fieldErrors(result.error) });
  }

  const lead = result.data;
  const submittedAt = new Date().toISOString();
  const rows = leadRows(lead);

  const [emailed, sheeted] = await Promise.all([
    sendEmail(lead, rows).catch((err) => {
      console.error("[lead] email failed:", err);
      return false;
    }),
    appendToSheet(lead, submittedAt),
  ]);

  if (!emailed && !sheeted) {
    if (process.env.NODE_ENV !== "production") {
      // Local development without keys: show the lead in the terminal.
      console.info("[lead] (not delivered: set SMTP_HOST, SMTP_USER and SMTP_PASS)", { submittedAt, ...lead });
    } else {
      console.error("[lead] Lead could not be delivered", { submittedAt, ...lead });
      return respond(isForm, request, 502, {
        ok: false,
        error: `Sorry, we couldn't send your message. Please call ${siteConfig.phone.display} or WhatsApp us.`,
      });
    }
  }

  return respond(isForm, request, 200, { ok: true, redirect: THANK_YOU_PATH });
}
