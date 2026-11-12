import type { Metadata } from "next";
import Link from "next/link";
import { services, siteConfig, whatsappHref } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

export const metadata: Metadata = pageMetadata({
  title: "Thank You",
  description: "Thanks for contacting Ramakalpa Solutions. We'll be in touch soon.",
  path: "/thank-you/",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <section className="section bg-cream">
      <div className="container-site max-w-3xl text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-lavender text-violet">
          <CheckIcon size={32} />
        </span>
        <h1 className="mt-6 text-4xl leading-tight font-semibold text-ink md:text-6xl">
          Thank you, <span className="text-violet">we&apos;ve got it!</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-plum">
          We&apos;ll review your details and get back to you. Want to talk now? Call or WhatsApp us during business hours:{" "}
          {siteConfig.hours.display}.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={siteConfig.phone.href} className="btn btn-cta text-lg">
            <PhoneIcon size={20} />
            Call {siteConfig.phone.display}
          </a>
          <a
            href={whatsappHref("Hi Ramakalpa, I just sent an enquiry on your website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-lg"
          >
            <WhatsAppIcon size={20} />
            WhatsApp us
          </a>
        </div>
        <div className="mt-14 rounded-[16px] bg-sand p-8 text-left">
          <h2 className="text-2xl font-semibold text-ink">While you wait</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="link">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/portfolio/" className="link">
                See our work
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
