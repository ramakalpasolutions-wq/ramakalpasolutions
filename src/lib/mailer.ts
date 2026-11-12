import nodemailer, { type Transporter } from "nodemailer";

let transporter: Transporter | null = null;

/**
 * SMTP transport for lead emails, configured from environment variables.
 * Returns null until SMTP_HOST, SMTP_USER and SMTP_PASS are set.
 *
 * Hostinger (ramakalpasolutions.in mail): SMTP_HOST=smtp.hostinger.com, SMTP_PORT=465,
 * SMTP_USER=<full mailbox address>, SMTP_PASS=<that mailbox's password>.
 */
export function getMailer(): Transporter | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  if (transporter) return transporter;

  const port = Number(process.env.SMTP_PORT || 465);
  // Port 465 uses SSL from the start; 587 upgrades with STARTTLS.
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;

  transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
  return transporter;
}

/** Sender address. Most SMTP providers (Hostinger included) require it to be the logged-in mailbox. */
export function mailFrom(): string {
  return process.env.LEAD_FROM_EMAIL || `Ramakalpa Website <${process.env.SMTP_USER}>`;
}

/** Where leads go. Falls back to the sending mailbox. */
export function leadRecipients(): string[] {
  const to = process.env.LEAD_TO_EMAIL || process.env.SMTP_USER || "";
  return to
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}
