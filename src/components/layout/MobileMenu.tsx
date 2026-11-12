"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav, services, siteConfig } from "@/config/site";
import { stagger } from "@/lib/motion";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState<string | null>(null);
  const pathname = usePathname();
  const panelId = useId();

  // Close the menu after navigating.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const item = `transition-[opacity,transform] duration-300 ease-out ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`;
  const bar = "absolute left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-cream transition-transform duration-300";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="relative grid size-11 place-items-center rounded-xl bg-ink text-cream transition-transform active:scale-95"
      >
        {/* Hamburger that morphs into an X */}
        <span aria-hidden="true" className={`${bar} top-[14px] ${open ? "translate-y-[7px] rotate-45" : ""}`} />
        <span aria-hidden="true" className={`${bar} top-[21px] ${open ? "scale-x-0" : ""}`} />
        <span aria-hidden="true" className={`${bar} top-[28px] ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>

      <div
        id={panelId}
        inert={!open}
        className={`fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto border-t border-[#e8dfd2] bg-cream transition-[opacity,visibility,transform] duration-300 ease-out md:top-[5.5rem] ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-site py-6">
          <ul className="space-y-1">
            {mainNav.map((link, i) => (
              <li key={link.href} className={item} style={{ ...stagger(i), transitionDelay: open ? `${i * 45 + 60}ms` : "0ms" }}>
                <Link
                  href={link.href}
                  aria-current={pathname.startsWith(link.href) ? "page" : undefined}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-xl font-semibold text-ink hover:bg-sand aria-[current=page]:text-violet-700"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-violet">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className={item} style={{ transitionDelay: open ? "340ms" : "0ms" }}>
            <p className="mt-6 px-3 text-sm font-semibold tracking-wide text-plum uppercase">Services</p>
            <ul className="mt-2 space-y-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="block rounded-xl px-3 py-2.5 text-ink hover:bg-sand">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`mt-8 grid gap-3 ${item}`} style={{ transitionDelay: open ? "400ms" : "0ms" }}>
            <Link href="/contact/" className="btn btn-cta w-full">
              Get free quote
            </Link>
            <a href={siteConfig.phone.href} className="btn btn-outline w-full">
              Call {siteConfig.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
