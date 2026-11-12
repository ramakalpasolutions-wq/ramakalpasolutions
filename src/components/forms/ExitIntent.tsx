"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { CloseIcon } from "@/components/ui/icons";
import { AuditForm } from "./AuditForm";

const STORAGE_KEY = "rk_exit_offer_seen";
const SKIP_PATHS = ["/contact/", "/thank-you/"];

/**
 * Desktop-only exit-intent popup offering a free website audit.
 * Shown at most once per visitor (remembered in localStorage).
 */
export function ExitIntent() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const skip = SKIP_PATHS.includes(pathname);

  useEffect(() => {
    if (skip) return;
    const isDesktop = window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches;
    if (!isDesktop) return;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }

    let armed = false;
    // Give visitors time to read before the popup can appear.
    const timer = window.setTimeout(() => (armed = true), 8000);

    const onLeave = (e: MouseEvent) => {
      if (!armed || e.relatedTarget || e.clientY > 10) return;
      const dialog = dialogRef.current;
      if (!dialog || dialog.open) return;
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {}
      dialog.showModal();
      document.removeEventListener("mouseout", onLeave);
    };

    document.addEventListener("mouseout", onLeave);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [skip]);

  if (skip) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="exit-offer-title"
      className="m-auto w-[min(92vw,34rem)] rounded-2xl bg-cream p-0 text-ink backdrop:bg-[rgba(30,15,64,0.7)]"
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      <div className="relative p-8">
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close"
          className="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-sand text-ink hover:bg-lavender"
        >
          <CloseIcon size={20} />
        </button>
        <p className="eyebrow mb-4">Before you go</p>
        <h2 id="exit-offer-title" className="pr-10 text-3xl leading-tight font-semibold">
          Get a free website audit in <span className="text-violet">24 hours</span>
        </h2>
        <p className="mt-3 text-plum">
          We&apos;ll check your site&apos;s speed, mobile experience and Google visibility and send you a short list of fixes. Free, no
          obligation.
        </p>
        <div className="mt-6">
          <AuditForm />
        </div>
      </div>
    </dialog>
  );
}
