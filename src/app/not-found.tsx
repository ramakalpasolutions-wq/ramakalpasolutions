import type { Metadata } from "next";
import Link from "next/link";
import { services, siteConfig, whatsappHref } from "@/config/site";
import { ArrowRightIcon, serviceIcons } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="section bg-cream">
      <div className="container-site max-w-4xl">
        <p className="font-heading text-6xl font-semibold text-pink md:text-8xl">404</p>
        <h1 className="mt-4 text-4xl leading-tight font-semibold text-ink md:text-5xl">
          This page <span className="text-violet">doesn&apos;t exist</span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-plum">
          The link may be old or mistyped. Here are some places to start, or call us on{" "}
          <a href={siteConfig.phone.href} className="link">
            {siteConfig.phone.display}
          </a>
          .
        </p>
        <h2 className="mt-12 font-sans text-sm font-semibold tracking-wider text-plum uppercase">Our services</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-3">
          {services.map((s) => {
            const Icon = serviceIcons[s.key];
            return (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="lift group flex h-full flex-col rounded-[14px] bg-sand p-6 hover:bg-lavender">
                  <Icon size={28} className="text-violet" />
                  <span className="mt-4 text-lg font-semibold text-ink">{s.name}</span>
                  <span className="mt-1 text-plum">{s.short}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-cta">
            Back to home
            <ArrowRightIcon size={18} />
          </Link>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
