import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services, siteConfig, whatsappHref } from "@/config/site";
import { getLocalPage, localPages } from "@/data/locations";
import { serviceDetails } from "@/data/services";
import { postsForService } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { stagger } from "@/lib/motion";
import { serviceJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Process } from "@/components/sections/Process";
import { PricingCards } from "@/components/sections/PricingCards";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { RelatedLinks } from "@/components/sections/RelatedLinks";

/** One template for every local SEO landing page in /src/data/locations.ts. */
type Props = { params: Promise<{ location: string }> };

// Only the slugs below exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return localPages.map((p) => ({ location: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const page = getLocalPage(location);
  if (!page) return {};
  return pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: `/${page.slug}/` });
}

export default async function LocalLandingPage({ params }: Props) {
  const { location } = await params;
  const page = getLocalPage(location);
  if (!page) notFound();

  const service = getService(page.service)!;
  const detail = serviceDetails[page.service];
  const path = `/${page.slug}/`;
  const whatsappMessage = `Hi Ramakalpa, I'm interested in ${service.name.toLowerCase()} in ${page.city}.`;

  const sameCity = localPages
    .filter((p) => p.city === page.city && p.slug !== page.slug)
    .map((p) => ({ href: `/${p.slug}/`, label: `${getService(p.service)?.name} in ${p.city}` }));
  const otherCity = localPages
    .filter((p) => p.city !== page.city && p.service === page.service)
    .map((p) => ({ href: `/${p.slug}/`, label: `${service.name} in ${p.city}` }));
  const serviceLinks = [
    { href: `/services/${service.slug}/`, label: `${service.name} services`, note: "Full details, process and packages" },
    ...otherCity,
    ...sameCity,
  ];
  const postLinks = postsForService(page.service).map((p) => ({ href: `/blog/${p.slug}/`, label: p.title }));

  return (
    <>
      <JsonLd
        data={serviceJsonLd(service, {
          path,
          description: page.metaDescription,
          areaServed: [page.city, ...page.areas, "Andhra Pradesh"],
        })}
      />
      <PageHero
        crumbs={[
          { name: service.name, path: `/services/${service.slug}/` },
          { name: page.city, path },
        ]}
        eyebrow={`${service.name} · ${page.city}`}
        title={page.h1}
        intro={page.lead}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#get-quote" className="btn btn-cta text-lg">
            Get a free quote
          </a>
          <a href={siteConfig.phone.href} className="btn btn-outline text-lg">
            <PhoneIcon size={20} />
            Call now
          </a>
          <a href={whatsappHref(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp text-lg">
            <WhatsAppIcon size={20} />
            WhatsApp
          </a>
        </div>
      </PageHero>

      <section className="section bg-sand" aria-labelledby="local-about-heading">
        <div className="container-site grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 id="local-about-heading" className="text-3xl leading-tight font-semibold text-ink md:text-4xl">
              {service.name} for <Highlight>{page.city}</Highlight> businesses
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-plum">
              {page.body.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>
          </div>
          <aside className="reveal space-y-6">
            <div className="rounded-[14px] bg-cream p-6">
              <h3 className="font-sans text-lg font-semibold text-ink">Industries we work with in {page.city}</h3>
              <ul className="mt-4 space-y-2.5">
                {page.industries.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-ink">
                    <CheckIcon size={18} className="mt-1 shrink-0 text-violet" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[14px] bg-cream p-6">
              <h3 className="flex items-center gap-2 font-sans text-lg font-semibold text-ink">
                <MapPinIcon size={20} className="text-violet" />
                Areas we serve
              </h3>
              <p className="mt-3 leading-relaxed text-plum">
                {page.areas.join(", ")} and surrounding areas.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-cream" aria-labelledby="local-why-heading">
        <div className="container-site">
          <SectionHeading
            id="local-why-heading"
            title={
              <>
                Why {page.city} businesses <Highlight>work with us</Highlight>
              </>
            }
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.localPoints.map((pt, i) => (
              <li key={pt.title} className="reveal lift rounded-[14px] bg-sand p-6" style={stagger(i)}>
                <h3 className="font-sans text-lg font-semibold text-ink">{pt.title}</h3>
                <p className="mt-2 leading-relaxed text-plum">{pt.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process steps={detail.process} bg="sand" />

      <section className="section bg-cream" aria-labelledby="packages-heading">
        <div className="container-site">
          <SectionHeading
            id="packages-heading"
            eyebrow="Packages"
            title={
              <>
                {service.name} <Highlight>packages</Highlight>
              </>
            }
          />
          <div className="mt-14">
            <PricingCards service={page.service} cardBg="sand" />
          </div>
        </div>
      </section>

      <FaqSection
        faqs={page.faqs}
        bg="sand"
        title={
          <>
            {service.name} in {page.city}: <Highlight>FAQs</Highlight>
          </>
        }
      />

      <section className="bg-cream py-14" aria-label="Related pages">
        <div className="container-site grid gap-10 md:grid-cols-3">
          <RelatedLinks title="Related services" links={serviceLinks} />
          <RelatedLinks
            title="Explore more"
            links={services
              .filter((s) => s.slug !== service.slug)
              .map((s) => ({ href: `/services/${s.slug}/`, label: s.name }))}
          />
          <RelatedLinks title="From the blog" links={postLinks} />
        </div>
      </section>

      <CtaBanner
        bg="sand"
        defaultService={service.name}
        whatsappMessage={whatsappMessage}
        title={
          <>
            Get a free quote in <span className="text-violet">{page.city}</span>
          </>
        }
      />
    </>
  );
}
