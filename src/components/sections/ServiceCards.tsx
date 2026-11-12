import Link from "next/link";
import { services } from "@/config/site";
import { ArrowRightIcon, serviceIcons } from "@/components/ui/icons";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { stagger } from "@/lib/motion";

export function ServiceCards({ headingLevel = "h2" }: { headingLevel?: "h2" | "h3" }) {
  const CardHeading = headingLevel === "h2" ? "h3" : "h4";
  return (
    <section className="section bg-sand" aria-labelledby="services-heading">
      <div className="container-site">
        <SectionHeading
          id="services-heading"
          eyebrow="What we do"
          title={
            <>
              Three services, <Highlight>one goal</Highlight>: more customers
            </>
          }
          intro="Every website, app and campaign we deliver is built to bring you enquiries, not just look good."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.key];
            return (
              <article key={s.slug} className="reveal lift group relative flex flex-col rounded-[16px] bg-cream p-7 md:p-8" style={stagger(i)}>
                <span className="tilt-icon grid size-14 place-items-center rounded-2xl bg-lavender text-violet">
                  <Icon size={28} />
                </span>
                <CardHeading className="mt-6 text-2xl font-semibold text-ink">{s.name}</CardHeading>
                <p className="mt-3 flex-1 leading-relaxed text-plum">{s.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full bg-sand px-3 py-1 text-sm font-medium text-plum">
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${s.slug}/`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-violet-700 after:absolute after:inset-0 after:rounded-[16px] hover:text-ink"
                >
                  Explore {s.name.toLowerCase()}
                  <ArrowRightIcon size={18} className="nudge" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
