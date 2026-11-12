import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { stagger } from "@/lib/motion";

/** Renders nothing until /src/data/testimonials.ts has entries. */
export function Testimonials({ bg = "cream" }: { bg?: "cream" | "sand" }) {
  if (testimonials.length === 0) return null;
  return (
    <section className={`section ${bg === "cream" ? "bg-cream" : "bg-sand"}`} aria-labelledby="testimonials-heading">
      <div className="container-site">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title={
            <>
              What our <Highlight>clients say</Highlight>
            </>
          }
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name + t.quote.slice(0, 20)} className="reveal" style={stagger(i % 3)}>
              <figure className={`lift flex h-full flex-col rounded-[16px] p-7 ${bg === "cream" ? "bg-sand" : "bg-cream"}`}>
                <blockquote className="flex-1 text-lg leading-relaxed text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {t.photo && (
                    <Image src={t.photo} alt={`Photo of ${t.name}`} width={48} height={48} className="size-12 rounded-full object-cover" />
                  )}
                  <span>
                    <span className="block font-semibold text-ink">{t.name}</span>
                    {(t.role || t.company) && (
                      <span className="block text-sm text-plum">{[t.role, t.company].filter(Boolean).join(", ")}</span>
                    )}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
