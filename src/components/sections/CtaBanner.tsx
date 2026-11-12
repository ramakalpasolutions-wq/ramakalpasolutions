import { siteConfig, whatsappHref, type leadServiceOptions } from "@/config/site";
import { LeadForm } from "@/components/forms/LeadForm";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

type Props = {
  title?: React.ReactNode;
  intro?: string;
  defaultService?: (typeof leadServiceOptions)[number];
  whatsappMessage?: string;
  bg?: "cream" | "sand";
};

/** Dark CTA banner with the lead form. Sits inside a light section so it doesn't merge with the footer. */
export function CtaBanner({
  title = (
    <>
      Ready to launch your <span className="text-violet">next big idea?</span>
    </>
  ),
  intro = "Tell us what you need and we'll get back to you with ideas, a timeline and a clear quote.",
  defaultService,
  whatsappMessage,
  bg = "cream",
}: Props) {
  return (
    <section id="get-quote" className={`section ${bg === "cream" ? "bg-cream" : "bg-sand"}`} aria-labelledby="cta-heading">
      <div className="container-site">
        <div className="reveal reveal-scale grid gap-10 rounded-[16px] bg-night p-7 md:p-12 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div>
            <h2 id="cta-heading" className="text-3xl leading-tight font-semibold text-cream md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-lg text-mist">{intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a href={siteConfig.phone.href} className="btn btn-outline-light">
                <PhoneIcon size={20} />
                {siteConfig.phone.display}
              </a>
              <a
                href={whatsappHref(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <WhatsAppIcon size={20} />
                WhatsApp us
              </a>
            </div>
          </div>
          <div className="rounded-[14px] bg-cream p-6 md:p-8">
            <LeadForm defaultService={defaultService} />
          </div>
        </div>
      </div>
    </section>
  );
}
