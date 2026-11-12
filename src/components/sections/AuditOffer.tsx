import { AuditForm } from "@/components/forms/AuditForm";
import { CheckIcon } from "@/components/ui/icons";
import { Highlight } from "@/components/ui/SectionHeading";

const checks = ["Mobile speed and Core Web Vitals", "Google search visibility", "Lead capture and contact options", "Top 5 fixes, in plain language"];

export function AuditOffer() {
  return (
    <section className="section bg-sand" aria-labelledby="audit-heading">
      <div className="container-site">
        <div className="reveal reveal-scale grid gap-10 rounded-[16px] bg-cream p-7 md:p-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Free offer</p>
            <h2 id="audit-heading" className="mt-4 text-3xl leading-tight font-semibold text-ink md:text-4xl">
              Get a <Highlight>free website audit</Highlight> in 24 hours
            </h2>
            <p className="mt-4 text-lg text-plum">
              Not sure why your website isn&apos;t bringing enquiries? Share the link and we&apos;ll send a short, honest report.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {checks.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-ink">
                  <CheckIcon size={20} className="mt-0.5 shrink-0 text-violet" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[14px] bg-sand p-6 md:p-8">
            <AuditForm />
            <p className="mt-4 text-center text-sm text-plum">No spam. One report, one follow-up call if you want it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
