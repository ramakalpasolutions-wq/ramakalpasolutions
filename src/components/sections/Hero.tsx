import Link from "next/link";
import { services, siteConfig, whatsappHref } from "@/config/site";
import { stagger } from "@/lib/motion";
import { CheckIcon, StarIcon, WhatsAppIcon, serviceIcons } from "@/components/ui/icons";

const codeLines = [
  <>
    <span className="text-[#B7A4FF]">const</span> project = <span className="text-orange">launch</span>({"{"}
  </>,
  <>
    <span className="pl-5" />
    web: <span className="text-[#9ef0b9]">&quot;Next.js&quot;</span>,
  </>,
  <>
    <span className="pl-5" />
    app: <span className="text-[#9ef0b9]">&quot;Android + iOS&quot;</span>,
  </>,
  <>
    <span className="pl-5" />
    growth: <span className="text-[#9ef0b9]">&quot;SEO + Ads&quot;</span>,
  </>,
  <>{"});"}</>,
];

export function Hero() {
  return (
    <section className="overflow-hidden bg-cream pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div className="hero-in">
          <p className="eyebrow" style={stagger(0)}>
            <StarIcon size={14} className="text-pink" />
            Web, app and marketing studio in Guntur
          </p>
          <h1
            className="mt-6 text-[clamp(2.4rem,8vw,4.75rem)] leading-[1.05] font-semibold text-ink"
            style={stagger(1)}
          >
            We Build <span className="ink-underline text-violet">Digital Futures</span> That Scale.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-plum md:text-xl" style={stagger(2)}>
            Websites, Android and iOS apps, and digital marketing for businesses in Guntur, Vijayawada and across India. Built
            to be found on Google and to turn visitors into enquiries.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row" style={stagger(3)}>
            <Link href="/contact/" className="btn btn-cta group text-lg">
              Start your project
              <span aria-hidden="true" className="nudge">
                →
              </span>
            </Link>
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-outline text-lg">
              <WhatsAppIcon size={20} />
              WhatsApp us
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-plum" style={stagger(4)}>
            {["Free consultation", "Clear written quotes", `Office in ${siteConfig.address.locality}`].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckIcon size={18} className="text-violet" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Flat illustration: no images, so nothing to load or shift.
            Layers: entrance (hero-in) > scroll parallax > idle float. */}
        <div aria-hidden="true" className="hero-in relative mx-auto w-full max-w-md lg:max-w-none">
          <div style={stagger(2)}>
            <div className="parallax">
              <div className="float rounded-[16px] bg-night p-6 text-mist shadow-[0_20px_40px_rgba(30,15,64,0.18)]">
                <div className="flex gap-2">
                  <span className="size-3 rounded-full bg-pink" />
                  <span className="size-3 rounded-full bg-orange" />
                  <span className="size-3 rounded-full bg-violet" />
                </div>
                <div className="mt-6 space-y-3 font-mono text-sm">
                  {codeLines.map((line, i) => (
                    <p key={i} className="type-line" style={stagger(i)}>
                      {line}
                      {i === codeLines.length - 1 && (
                        <span className="caret ml-1 inline-block h-4 w-2 translate-y-0.5 bg-mist" />
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 -mt-6 ml-auto w-[78%] sm:-mt-8" style={stagger(4)}>
            <div className="parallax parallax-reverse">
              <div className="float float-delay rounded-[16px] bg-sand p-5 shadow-[0_12px_30px_rgba(30,15,64,0.12)]">
                <p className="text-sm font-semibold tracking-wide text-plum uppercase">What we build</p>
                <ul className="mt-3 space-y-2.5">
                  {services.map((s) => {
                    const Icon = serviceIcons[s.key];
                    return (
                      <li key={s.slug} className="flex items-center gap-3 font-semibold text-ink">
                        <span className="grid size-8 place-items-center rounded-lg bg-lavender text-violet">
                          <Icon size={18} />
                        </span>
                        {s.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="absolute -top-4 -right-2 z-20 rounded-xl bg-lavender px-4 py-2 text-sm font-semibold text-violet-700 sm:-right-4"
            style={stagger(5)}
          >
            Guntur · Vijayawada · India
          </div>
        </div>
      </div>
    </section>
  );
}
