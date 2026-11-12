"use client";

import { useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { trackLead } from "@/lib/analytics";
import { Field, Honeypot, submitLead } from "./form-utils";

/** Two-field "free website audit" form: website + phone. */
export function AuditForm({ layout = "stacked" }: { layout?: "stacked" | "inline" }) {
  const id = useId();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setFormError("");
    const result = await submitLead(event.currentTarget, "audit");
    if (result.ok) {
      trackLead("form", { form_type: "website_audit" });
      router.push("/thank-you/");
      return;
    }
    setErrors(result.fields ?? {});
    setFormError(result.message ?? "");
    setSubmitting(false);
    const first = Object.keys(result.fields ?? {})[0];
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  }

  const inline = layout === "inline";
  return (
    <form ref={formRef} action="/api/lead/" method="post" noValidate onSubmit={onSubmit} className="grid gap-4">
      <input type="hidden" name="type" value="audit" />
      <Honeypot />
      <div className={inline ? "grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-start" : "grid gap-4"}>
        <Field id={`${id}-website`} label="Your website" error={errors.website}>
          <input name="website" type="text" inputMode="url" autoComplete="url" required placeholder="yourbusiness.com" />
        </Field>
        <Field id={`${id}-phone`} label="Phone / WhatsApp" error={errors.phone}>
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="10-digit mobile" />
        </Field>
        <button
          type="submit"
          className={`btn btn-cta ${inline ? "md:mt-[1.6rem]" : "w-full"}`}
          disabled={submitting}
          aria-busy={submitting}
        >
          {submitting ? "Sending…" : "Get my free audit"}
        </button>
      </div>
      {formError && (
        <p role="alert" className="rounded-lg bg-[#fde8e8] px-4 py-3 text-sm font-medium text-[#8a1c22]">
          {formError}
        </p>
      )}
    </form>
  );
}
