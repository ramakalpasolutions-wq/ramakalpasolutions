import { siteConfig, whatsappHref } from "@/config/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

const shadow = "shadow-[0_6px_16px_rgba(30,15,64,0.25)]";

/**
 * Floating actions on every page: back-to-top (appears after scrolling),
 * click-to-call (mobile) and WhatsApp with a gentle pulse and a hover label.
 */
export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-30 flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      <a
        href="#main"
        aria-label="Back to top"
        className={`show-on-scroll grid size-11 place-items-center rounded-full bg-cream text-ink ring-1 ring-[#e3d8c8] transition-transform hover:-translate-y-1 ${shadow}`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      <a
        href={siteConfig.phone.href}
        aria-label={`Call ${siteConfig.phone.display}`}
        className={`grid size-14 place-items-center rounded-full bg-orange text-ink transition-transform hover:bg-orange-hover active:scale-95 md:hidden ${shadow}`}
      >
        <PhoneIcon size={24} />
      </a>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex items-center gap-3"
      >
        <span
          aria-hidden="true"
          className={`hidden translate-x-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-cream opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block ${shadow}`}
        >
          Chat on WhatsApp
        </span>
        <span
          className={`pulse isolate grid size-14 place-items-center rounded-full bg-[#25D366] text-ink transition-transform group-hover:scale-105 group-active:scale-95 md:size-16 ${shadow}`}
        >
          <WhatsAppIcon size={30} />
        </span>
      </a>
    </div>
  );
}
