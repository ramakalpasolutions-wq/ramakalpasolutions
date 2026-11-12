import { z } from "zod";
import { leadBudgetOptions, leadServiceOptions } from "@/config/site";

/** Indian mobile/landline: 10 digits, optionally prefixed with +91, 91 or 0. */
const phone = z
  .string()
  .trim()
  .transform((v) => v.replace(/[\s()-]/g, ""))
  .pipe(z.string().regex(/^(?:\+?91|0)?[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"));

const source = z.string().trim().max(200).optional();
// Honeypot: real people never see or fill this field.
const honeypot = z.string().max(0, "Spam detected").optional();

export const leadSchema = z.object({
  type: z.literal("lead"),
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  phone,
  email: z.union([z.literal(""), z.email("Enter a valid email address")]).optional(),
  service: z.enum(leadServiceOptions, { error: "Please choose a service" }),
  budget: z.enum(leadBudgetOptions, { error: "Please choose a budget" }),
  message: z.string().trim().max(2000, "Message is too long").optional(),
  source,
  company_website: honeypot,
});

export const auditSchema = z.object({
  type: z.literal("audit"),
  website: z
    .string()
    .trim()
    .min(4, "Enter your website address")
    .max(200)
    .regex(/^(https?:\/\/)?[\w-]+(\.[\w-]+)+([/?#].*)?$/i, "Enter a valid website address, e.g. example.com"),
  phone,
  source,
  company_website: honeypot,
});

export const submissionSchema = z.discriminatedUnion("type", [leadSchema, auditSchema]);

export type LeadInput = z.infer<typeof leadSchema>;
export type AuditInput = z.infer<typeof auditSchema>;
export type Submission = z.infer<typeof submissionSchema>;

/** Flattens zod issues into { field: firstMessage } for showing next to inputs. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
