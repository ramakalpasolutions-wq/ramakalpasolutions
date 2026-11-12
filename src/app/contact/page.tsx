import type { Metadata } from "next";
import { siteConfig, whatsappHref } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us: Get a Free Quote",
  description:
    "Contact Ramakalpa Solutions in Guntur for website development, app development and digital marketing. Call or WhatsApp +91 90105 61998, email us or visit our office in Chaitanyapuri.",
  path: "/contact/",
});

const mapQuery = encodeURIComponent(`${siteConfig.name}, ${siteConfig.address.full}`);

export default function ContactPage() {
  const { address, phone, email } = siteConfig;
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: "/contact/" }]}
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something <span className="text-violet">great together</span>
          </>
        }
        intro="Tell us about your project and we'll get back to you with ideas and a clear quote. Prefer to talk? Call or WhatsApp us."
      />

      <section className="section bg-sand !pt-14" aria-label="Contact form and details">
        <div className="container-site grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div id="get-quote" className="rounded-[16px] bg-cream p-6 md:p-10">
            <h2 className="text-2xl font-semibold text-ink md:text-3xl">Get your free quote</h2>
            <p className="mt-2 mb-8 text-plum">Fields marked optional can be skipped.</p>
            <LeadForm submitLabel="Send my enquiry" />
          </div>

          <div className="grid content-start gap-4">
            <h2 className="sr-only">Contact details</h2>
            <a href={phone.href} className="lift flex items-center gap-4 rounded-[14px] bg-cream p-5 hover:bg-lavender">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-orange text-ink">
                <PhoneIcon size={22} />
              </span>
              <span>
                <span className="block text-sm text-plum">Call us</span>
                <span className="block text-lg font-semibold text-ink">{phone.display}</span>
              </span>
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="lift flex items-center gap-4 rounded-[14px] bg-cream p-5 hover:bg-lavender"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#25D366] text-ink">
                <WhatsAppIcon size={24} />
              </span>
              <span>
                <span className="block text-sm text-plum">WhatsApp</span>
                <span className="block text-lg font-semibold text-ink">Chat with us</span>
              </span>
            </a>
            <a href={`mailto:${email}`} className="lift flex items-center gap-4 rounded-[14px] bg-cream p-5 hover:bg-lavender">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-lavender text-violet-700">
                <MailIcon size={22} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-plum">Email</span>
                <span className="block font-semibold break-all text-ink">{email}</span>
              </span>
            </a>
            <div className="flex items-start gap-4 rounded-[14px] bg-cream p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-lavender text-violet-700">
                <MapPinIcon size={22} />
              </span>
              <address className="not-italic">
                <span className="block text-sm text-plum">Office</span>
                <span className="block font-semibold text-ink">{address.street}</span>
                <span className="block text-ink">
                  {address.locality}, {address.region} {address.postalCode}
                </span>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link mt-2 inline-block text-sm"
                >
                  Get directions
                </a>
              </address>
            </div>
            <div className="flex items-start gap-4 rounded-[14px] bg-cream p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-lavender text-violet-700">
                <ClockIcon size={22} />
              </span>
              <div>
                <h3 className="font-sans text-sm font-normal text-plum">Business hours</h3>
                <p className="font-semibold text-ink">Monday – Saturday</p>
                <p className="text-ink">9:30 AM – 6:30 PM</p>
                <p className="text-sm text-plum">Closed on Sundays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream" aria-labelledby="map-heading">
        <div className="container-site py-14">
          <h2 id="map-heading" className="text-2xl font-semibold text-ink md:text-3xl">
            Find us in <span className="text-violet">Guntur</span>
          </h2>
          <p className="mt-2 text-plum">{address.full}</p>
          <div className="mt-6 aspect-[4/3] overflow-hidden rounded-[16px] bg-sand md:aspect-[21/9]">
            <iframe
              title={`Map showing ${siteConfig.name}, ${address.full}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
