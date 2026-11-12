import type { Faq } from "@/data/faqs";
import { FaqList } from "@/components/ui/FaqList";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";

export function FaqSection({ faqs, bg = "sand", title }: { faqs: Faq[]; bg?: "sand" | "cream"; title?: React.ReactNode }) {
  return (
    <section className={`section ${bg === "sand" ? "bg-sand" : "bg-cream"}`} aria-labelledby="faq-heading">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title={
            title ?? (
              <>
                Questions, <Highlight>answered</Highlight>
              </>
            )
          }
          intro="Can't find what you're looking for? Call or WhatsApp us, we're happy to help."
        />
        <FaqList faqs={faqs} />
      </div>
    </section>
  );
}
