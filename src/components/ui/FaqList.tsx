import type { Faq } from "@/data/faqs";
import { faqJsonLd } from "@/lib/jsonld";
import { JsonLd } from "./JsonLd";

/** Accessible FAQ accordion (native <details>, no JavaScript) with FAQPage schema. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="reveal divide-y divide-[#e3d8c8] overflow-hidden rounded-[14px] border border-[#e3d8c8] bg-cream">
        {faqs.map((f) => (
          <details key={f.q} className="faq group px-5 py-1 transition-colors hover:bg-[#fffdf9] open:bg-[#fffdf9] md:px-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
              <h3 className="font-sans text-lg font-semibold">{f.q}</h3>
              <span
                aria-hidden="true"
                className="grid size-8 shrink-0 place-items-center rounded-full bg-lavender text-xl text-violet-700 transition-[transform,background-color,color] duration-300 group-open:rotate-45 group-open:bg-violet group-open:text-cream"
              >
                +
              </span>
            </summary>
            <p className="pb-5 leading-relaxed text-plum">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
