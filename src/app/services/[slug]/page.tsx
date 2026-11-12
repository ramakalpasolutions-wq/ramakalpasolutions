import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService, services, whatsappHref, type ServiceSlug } from "@/config/site";
import { serviceDetails } from "@/data/services";
import { localPagesForService } from "@/data/locations";
import { postsForService } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { stagger } from "@/lib/motion";
import { serviceJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Process } from "@/components/sections/Process";
import { PricingCards } from "@/components/sections/PricingCards";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { RelatedLinks } from "@/components/sections/RelatedLinks";

type Props = { params: Promise<{ slug: string }> };

// Only the slugs below exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const detail = serviceDetails[service.slug];
  return pageMetadata({ title: detail.metaTitle, description: detail.metaDescription, path: `/services/${slug}/` });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const detail = serviceDetails[service.slug as ServiceSlug];
  const path = `/services/${service.slug}/`;
  const localLinks = localPagesForService(service.slug).map((p) => ({
    href: `/${p.slug}/`,
    label: `${service.name} in ${p.city}`,
  }));
  const postLinks = postsForService(service.slug).map((p) => ({ href: `/blog/${p.slug}/`, label: p.title }));
  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .map((s) => ({ href: `/services/${s.slug}/`, label: s.name, note: s.short }));

  return (
    <>
      <JsonLd data={serviceJsonLd(service, { path, description: detail.metaDescription })} />
      <PageHero
        crumbs={[
          { name: "Services", path: "/services/" },
          { name: service.name, path },
        ]}
        eyebrow={service.name}
        title={detail.headline}
        intro={detail.intro}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#get-quote" className="btn btn-cta text-lg">
            Get a free quote
          </a>
          <a
            href={whatsappHref(`Hi Ramakalpa, I'm interested in ${service.name.toLowerCase()}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-lg"
          >
            <WhatsAppIcon size={20} />
            WhatsApp us
          </a>
        </div>
      </PageHero>

      <section className="section bg-sand" aria-labelledby="included-heading">
        <div className="container-site">
          <SectionHeading
            id="included-heading"
            eyebrow="What's included"
            title={
              <>
                What you get with our <Highlight>{service.name.toLowerCase()}</Highlight>
              </>
            }
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {detail.included.map((item, i) => (
              <li key={item.title} className="reveal lift rounded-[14px] bg-cream p-6" style={stagger(i % 4)}>
                <CheckIcon size={22} className="text-violet" />
                <h3 className="mt-4 font-sans text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-plum">{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <h3 className="font-sans text-sm font-semibold tracking-wider text-plum uppercase">Tools and technologies</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {detail.tech.map((t) => (
                <li key={t} className="rounded-full bg-lavender px-4 py-1.5 font-medium text-violet-700 transition-colors hover:bg-violet hover:text-cream">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Process steps={detail.process} bg="cream" />

      <section className="section bg-sand" aria-labelledby="packages-heading">
        <div className="container-site">
          <SectionHeading
            id="packages-heading"
            eyebrow="Packages"
            title={
              <>
                Starting <Highlight>packages</Highlight>
              </>
            }
            intro="Every project is different. Pick a starting point and we'll tailor the scope and quote to you."
          />
          <div className="mt-14">
            <PricingCards service={service.slug} />
          </div>
        </div>
      </section>

      <FaqSection faqs={detail.faqs} bg="cream" />

      <section className="bg-sand py-14" aria-label="Related pages">
        <div className="container-site grid gap-10 md:grid-cols-3">
          <RelatedLinks title="Near you" links={localLinks} />
          <RelatedLinks title="Other services" links={otherServices} />
          <RelatedLinks title="From the blog" links={postLinks} />
        </div>
      </section>

      <CtaBanner
        defaultService={service.name}
        whatsappMessage={`Hi Ramakalpa, I'm interested in ${service.name.toLowerCase()}.`}
        title={
          <>
            Let&apos;s talk about your <span className="text-violet">{service.name.toLowerCase()}</span> project
          </>
        }
      />
    </>
  );
}
