import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/config/site";
import { serviceDetails } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { stagger } from "@/lib/motion";
import { PageHero } from "@/components/ui/PageHero";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon, CheckIcon, serviceIcons } from "@/components/ui/icons";
import { Process } from "@/components/sections/Process";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { localPages } from "@/data/locations";

export const metadata: Metadata = pageMetadata({
  title: "Our Services: Website, App Development & Digital Marketing",
  description:
    "Explore Ramakalpa Solutions' services: Next.js website development, Android and iOS app development, and digital marketing with SEO, Google and Meta ads. Based in Guntur, serving all of India.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services/" }]}
        eyebrow="Services"
        title={
          <>
            Everything you need to <span className="text-violet">grow online</span>
          </>
        }
        intro="Websites, apps and marketing under one roof, built by a team in Guntur that you can meet in person."
      />

      <section className="section bg-sand" aria-labelledby="all-services-heading">
        <div className="container-site">
          <h2 id="all-services-heading" className="sr-only">
            All services
          </h2>
          <div className="grid gap-8">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.key];
              const detail = serviceDetails[s.slug];
              return (
                <article key={s.slug} className="reveal lift group grid gap-8 rounded-[16px] bg-cream p-7 md:p-10 lg:grid-cols-[1fr_1.1fr]">
                  <div>
                    <span className="tilt-icon grid size-14 place-items-center rounded-2xl bg-lavender text-violet">
                      <Icon size={28} />
                    </span>
                    <p className="mt-6 font-heading text-lg text-pink">0{i + 1}</p>
                    <h3 className="mt-1 text-3xl font-semibold text-ink">{s.name}</h3>
                    <p className="mt-3 text-lg leading-relaxed text-plum">{detail.intro}</p>
                    <Link href={`/services/${s.slug}/`} className="btn btn-outline mt-6">
                      {s.name} details
                      <ArrowRightIcon size={18} className="nudge" />
                    </Link>
                  </div>
                  <ul className="grid content-start gap-3 sm:grid-cols-2">
                    {detail.included.map((item) => (
                      <li key={item.title} className="flex items-start gap-2.5 rounded-xl bg-sand p-4">
                        <CheckIcon size={18} className="mt-1 shrink-0 text-violet" />
                        <span className="font-medium text-ink">{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Process bg="cream" />

      <section className="section bg-sand" aria-labelledby="local-heading">
        <div className="container-site">
          <SectionHeading
            id="local-heading"
            title={
              <>
                Serving <Highlight>Guntur and Vijayawada</Highlight>
              </>
            }
            intro="We work with businesses across India, with in-person meetings in Guntur and Vijayawada."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {localPages.map((p, i) => (
              <li key={p.slug} className="reveal" style={stagger(i % 3)}>
                <Link
                  href={`/${p.slug}/`}
                  className="lift group flex h-full items-center justify-between gap-3 rounded-[14px] bg-cream p-5 font-semibold text-ink hover:text-violet-700"
                >
                  {services.find((s) => s.slug === p.service)?.name} in {p.city}
                  <ArrowRightIcon size={18} className="nudge shrink-0 text-violet" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
