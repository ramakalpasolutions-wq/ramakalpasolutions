export type LeadMethod = "form" | "whatsapp" | "call";

type Gtag = (command: "event", name: string, params: Record<string, unknown>) => void;

/** Sends a GA4 `generate_lead` event. Safe to call when GA isn't loaded. */
export function trackLead(method: LeadMethod, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.("event", "generate_lead", { method, ...params });
}
