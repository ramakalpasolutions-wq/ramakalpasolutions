"use client";

import { useEffect } from "react";

/**
 * Fades `.reveal` elements in as they scroll into view.
 * Watches for new elements (page changes, portfolio filters) automatically.
 * Does nothing for visitors who prefer reduced motion.
 */
export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const track = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((el) => {
        // Anything already on screen shows straight away, so nothing flickers.
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-visible");
        else io.observe(el);
      });
    };

    track(document);
    document.documentElement.classList.add("reveal-ready");

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (n instanceof HTMLElement) {
            if (n.matches(".reveal")) track(n.parentElement ?? document);
            else track(n);
          }
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
