import type { Metadata } from "next";
import Link from "next/link";
import { services, whatsappHref } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCards } from "@/components/sections/PricingCards";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { WhatsAppIcon } from "@/components/ui/icons";

export const metadata: Metadata = pageMetadata({
  title: "Pricing: Website, App & Digital Marketing Packages",
  description:
    "Basic, Standard and Premium packages for website development, app development and digital marketing from Ramakalpa Solutions, Guntur. Clear scope, written quotes, custom plans available.",
  path: "/pricing/",
});

const pricingFaqs = [
  {
    q: "Are these prices final?",
    a: "Packages are starting points. After a short call we confirm the exact scope and send a written quote, so you know the full cost before work begins.",
  },
  {
    q: "How do payments work?",
    a: "Projects are usually split into milestones, for example an advance to start, a payment after design approval and the balance at launch. Marketing plans are billed monthly.",
  },
  {
    q: "Is GST included?",
    a: "Our quotes state clearly whether GST is included. Ask us if you need a GST invoice.",
  },
  {
    q: "What if I need something that isn't listed?",
    a: "Most of our projects are customised. Tell us what you need and we'll put together a custom quote.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Pricing", path: "/pricing/" }]}
        eyebrow="Pricing"
        title={
          <>
            Simple packages, <span className="text-violet">clear quotes</span>
          </>
        }
        intro="Choose a starting package for each service. Every project gets a written quote with the exact scope before we begin."
      >
        <nav aria-label="Jump to service" className="mt-8 flex flex-wrap gap-2">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="rounded-full bg-sand px-4 py-2 font-semibold text-ink hover:bg-lavender">
              {s.name}
            </a>
          ))}
        </nav>
      </PageHero>

      {services.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`section ${i % 2 === 0 ? "bg-sand" : "bg-cream"}`}
          aria-labelledby={`${s.slug}-heading`}
        >
          <div className="container-site">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionHeading id={`${s.slug}-heading`} title={<Highlight>{s.name}</Highlight>} intro={s.summary} />
              <Link href={`/services/${s.slug}/`} className="link shrink-0">
                What&apos;s included
              </Link>
            </div>
            <div className="mt-14">
              <PricingCards service={s.slug} cardBg={i % 2 === 0 ? "cream" : "sand"} />
            </div>
          </div>
        </section>
      ))}

      <section className="section bg-night" aria-labelledby="custom-heading">
        <div className="container-site flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 id="custom-heading" className="text-3xl font-semibold text-cream md:text-4xl">
              Need something <span className="text-violet">different?</span>
            </h2>
            <p className="mt-3 text-lg text-mist">
              Combine services, add features or start smaller. Tell us what you need and we&apos;ll send a custom quote.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#get-quote" className="btn btn-cta text-lg">
              Get custom quote
            </a>
            <a
              href={whatsappHref("Hi Ramakalpa, I'd like a custom quote for ")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light text-lg"
            >
              <WhatsAppIcon size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <FaqSection faqs={pricingFaqs} bg="cream" title={<>Pricing <Highlight>questions</Highlight></>} />
      <CtaBanner bg="sand" title={<>Get your <span className="text-violet">custom quote</span></>} />
    </>
  );
}
