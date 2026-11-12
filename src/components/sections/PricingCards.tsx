import Link from "next/link";
import type { ServiceSlug } from "@/config/site";
import { formatPrice, pricing } from "@/data/pricing";
import { CheckIcon } from "@/components/ui/icons";
import { stagger } from "@/lib/motion";

type Props = { service: ServiceSlug; headingLevel?: "h3" | "h4"; cardBg?: "cream" | "sand" };

export function PricingCards({ service, headingLevel = "h3", cardBg = "cream" }: Props) {
  const Heading = headingLevel;
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {pricing[service].map((pkg, i) => (
        <li
          key={pkg.tier}
          style={stagger(i)}
          className={`reveal lift relative flex flex-col rounded-[16px] p-7 ${
            pkg.popular ? "bg-night text-mist" : cardBg === "cream" ? "bg-cream" : "bg-sand"
          }`}
        >
          {pkg.popular && (
            <span className="absolute -top-3 left-7 rounded-full bg-pink px-3 py-1 text-xs font-bold tracking-wide text-ink uppercase">
              Most popular
            </span>
          )}
          <Heading className={`text-2xl font-semibold ${pkg.popular ? "text-cream" : "text-ink"}`}>{pkg.tier}</Heading>
          <p className={`mt-2 ${pkg.popular ? "text-mist" : "text-plum"}`}>{pkg.description}</p>
          <p className="mt-6">
            {pkg.price === null ? (
              <span className={`font-heading text-3xl font-semibold ${pkg.popular ? "text-cream" : "text-ink"}`}>
                Custom quote
              </span>
            ) : (
              <>
                <span className={`text-sm ${pkg.popular ? "text-mist" : "text-plum"}`}>Starting at </span>
                <span className={`font-heading text-4xl font-semibold ${pkg.popular ? "text-cream" : "text-ink"}`}>
                  {formatPrice(pkg.price)}
                </span>
                <span className={`ml-1 text-sm ${pkg.popular ? "text-mist" : "text-plum"}`}>{pkg.period}</span>
              </>
            )}
          </p>
          <ul className="mt-6 flex-1 space-y-3">
            {pkg.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <CheckIcon size={18} className={`mt-1 shrink-0 ${pkg.popular ? "text-[#B7A4FF]" : "text-violet"}`} />
                <span className={pkg.popular ? "text-cream" : "text-ink"}>{f}</span>
              </li>
            ))}
          </ul>
          <Link
            href={`/contact/?service=${service}&plan=${pkg.tier.toLowerCase()}`}
            className={`btn mt-8 ${pkg.popular ? "btn-cta" : "btn-outline"}`}
          >
            {pkg.price === null ? "Get a quote" : `Choose ${pkg.tier}`}
            <span className="sr-only"> for {service.replace(/-/g, " ")}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
