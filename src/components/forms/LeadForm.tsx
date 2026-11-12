"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { getService, leadBudgetOptions, leadServiceOptions, siteConfig } from "@/config/site";
import { trackLead } from "@/lib/analytics";
import { Field, Honeypot, submitLead } from "./form-utils";

const noopSubscribe = () => () => {};

type Props = {
  /** Pre-selects the service dropdown, e.g. on a service page. */
  defaultService?: (typeof leadServiceOptions)[number];
  submitLabel?: string;
};

/**
 * Short lead form: name, phone, optional email, service, budget, message.
 * Validates with zod in the browser (loaded only on submit) and again on the server.
 * Falls back to a normal form post if JavaScript isn't available.
 */
export function LeadForm({ defaultService, submitLabel = "Get my free quote" }: Props) {
  const id = useId();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  // Set when a no-JavaScript form post failed and redirected back with ?error=1
  const fallbackFailed = useSyncExternalStore(
    noopSubscribe,
    () => new URLSearchParams(window.location.search).has("error"),
    () => false,
  );
  const shownError =
    formError || (fallbackFailed ? "Your message couldn't be sent. Please check the form and try again, or call us." : "");

  // Pre-fill from links like /contact/?service=app-development&plan=standard
  useEffect(() => {
    const form = formRef.current;
    if (!form || defaultService) return;
    const params = new URLSearchParams(window.location.search);
    const service = getService(params.get("service") ?? "");
    const plan = params.get("plan");
    if (service) form.querySelector<HTMLSelectElement>('select[name="service"]')!.value = service.name;
    if (plan && /^(basic|standard|premium)$/.test(plan)) {
      const message = form.querySelector<HTMLTextAreaElement>('textarea[name="message"]')!;
      if (!message.value) message.value = `I'm interested in the ${plan[0].toUpperCase() + plan.slice(1)} package.`;
    }
  }, [defaultService]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setFormError("");

    const result = await submitLead(event.currentTarget, "lead");
    if (result.ok) {
      trackLead("form", { form_type: "lead", service: result.data.service });
      router.push("/thank-you/");
      return;
    }

    setErrors(result.fields ?? {});
    setFormError(result.message ?? "");
    setSubmitting(false);
    const firstInvalid = Object.keys(result.fields ?? {})[0];
    if (firstInvalid) formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
  }

  return (
    <form ref={formRef} action="/api/lead/" method="post" noValidate onSubmit={onSubmit} className="grid gap-4">
      <input type="hidden" name="type" value="lead" />
      <Honeypot />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={`${id}-name`} label="Your name" error={errors.name}>
          <input name="name" type="text" autoComplete="name" required maxLength={80} />
        </Field>
        <Field id={`${id}-phone`} label="Phone / WhatsApp" error={errors.phone}>
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="10-digit mobile" />
        </Field>
      </div>

      <Field id={`${id}-email`} label="Email" optional error={errors.email}>
        <input name="email" type="email" autoComplete="email" />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={`${id}-service`} label="Service" error={errors.service}>
          <select name="service" required defaultValue={defaultService ?? ""}>
            <option value="" disabled>
              Choose a service
            </option>
            {leadServiceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <Field id={`${id}-budget`} label="Budget" error={errors.budget}>
          <select name="budget" required defaultValue="">
            <option value="" disabled>
              Choose a budget
            </option>
            {leadBudgetOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id={`${id}-message`} label="Tell us about your project" optional error={errors.message}>
        <textarea name="message" rows={3} maxLength={2000} />
      </Field>

      {shownError && (
        <p role="alert" className="rounded-lg bg-[#fde8e8] px-4 py-3 text-sm font-medium text-[#8a1c22]">
          {shownError}
        </p>
      )}

      <button type="submit" className="btn btn-cta w-full text-lg" disabled={submitting} aria-busy={submitting}>
        {submitting ? "Sending…" : submitLabel}
      </button>
      <p className="text-center text-sm text-plum">
        Prefer to talk? Call{" "}
        <a href={siteConfig.phone.href} className="link whitespace-nowrap">
          {siteConfig.phone.display}
        </a>
      </p>
    </form>
  );
}
