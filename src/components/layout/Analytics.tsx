"use client";

import { useEffect } from "react";
import { trackLead } from "@/lib/analytics";

/**
 * Fires GA4 `generate_lead` for every WhatsApp and call link on the site,
 * using one delegated listener instead of per-button JavaScript.
 */
export function LeadClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) trackLead("call", { link_url: href, page_path: location.pathname });
      else if (href.includes("wa.me/")) trackLead("whatsapp", { link_url: "wa.me", page_path: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
