"use client";

import { Children, cloneElement, isValidElement, type ReactElement } from "react";
import type { AuditInput, LeadInput } from "@/lib/lead-schema";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  /** Visually hide the label (still read by screen readers). */
  hideLabel?: boolean;
  children: ReactElement<React.InputHTMLAttributes<HTMLElement>>;
};

/** Label + control + error message, wired together for screen readers. */
export function Field({ id, label, error, optional, hideLabel, children }: FieldProps) {
  const errorId = `${id}-error`;
  const control = Children.only(children);
  return (
    <div>
      <label htmlFor={id} className={hideLabel ? "sr-only" : "mb-1.5 block text-sm font-semibold text-ink"}>
        {label}
        {optional && <span className="font-normal text-plum"> (optional)</span>}
      </label>
      {isValidElement(control) &&
        cloneElement(control, {
          id,
          className: "field",
          "aria-invalid": error ? true : undefined,
          "aria-describedby": error ? errorId : undefined,
        })}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm font-medium text-[#a1232a]">
          {error}
        </p>
      )}
    </div>
  );
}

/** Hidden from people, tempting for bots. Any value means spam. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Company website
        <input type="text" name="company_website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}

type SubmitResult<T> =
  | { ok: true; data: T }
  | { ok: false; fields?: Record<string, string>; message?: string };

/** Validates in the browser with zod (loaded on demand), then posts to /api/lead/. */
export async function submitLead(form: HTMLFormElement, type: "lead"): Promise<SubmitResult<LeadInput>>;
export async function submitLead(form: HTMLFormElement, type: "audit"): Promise<SubmitResult<AuditInput>>;
export async function submitLead(
  form: HTMLFormElement,
  type: "lead" | "audit",
): Promise<SubmitResult<LeadInput | AuditInput>> {
  const raw: Record<string, string> = {};
  new FormData(form).forEach((value, key) => {
    if (typeof value === "string") raw[key] = value;
  });
  raw.type = type;
  raw.source = window.location.pathname;

  const { leadSchema, auditSchema, fieldErrors } = await import("@/lib/lead-schema");
  const parsed = type === "lead" ? leadSchema.safeParse(raw) : auditSchema.safeParse(raw);
  if (!parsed.success) return { ok: false, fields: fieldErrors(parsed.error) };

  try {
    const res = await fetch("/api/lead/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(raw),
    });
    const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fields?: Record<string, string> };
    if (res.ok && body.ok) return { ok: true, data: parsed.data };
    return { ok: false, fields: body.fields, message: body.error ?? "Something went wrong. Please try again." };
  } catch {
    return { ok: false, message: "Network error. Please check your connection or WhatsApp us." };
  }
}
