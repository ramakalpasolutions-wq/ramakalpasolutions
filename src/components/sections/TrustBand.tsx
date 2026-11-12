import Image from "next/image";
import { clients } from "@/data/clients";
import { publicFileExists } from "@/lib/public-file";
import type { Client } from "@/data/clients";

/** Dark band with the client logos. */
export function TrustBand() {
  return (
    <section className="section bg-night" aria-labelledby="trust-heading">
      <div className="container-site">
        <div className="reveal max-w-3xl">
          <h2 id="trust-heading" className="text-3xl leading-tight font-semibold text-cream md:text-[2.75rem]">
            Some of the brands <span className="text-violet">we&apos;ve worked with</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-mist">
            Healthcare platforms, online stores, schools, event companies and local businesses across Andhra Pradesh.
          </p>
        </div>

        {/* Scrolling logo strip. Pauses on hover/focus; a still, wrapped grid for reduced motion. */}
        <div className="marquee mt-14">
          <div className="marquee-track">
            <ul className="flex shrink-0 gap-4 pr-4" aria-label="Some of our clients">
              {clients.map((c) => (
                <LogoTile key={c.name} client={c} />
              ))}
            </ul>
            <ul className="marquee-dup flex shrink-0 gap-4 pr-4" aria-hidden="true">
              {clients.map((c) => (
                <LogoTile key={c.name} client={c} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoTile({ client: c }: { client: Client }) {
  return (
    <li
      className={`flex h-24 w-40 shrink-0 items-center justify-center rounded-xl px-4 transition-transform duration-300 hover:-translate-y-1 lg:h-28 lg:w-48 ${
        c.darkTile ? "bg-ink" : "bg-cream"
      }`}
    >
      {publicFileExists(c.logo) ? (
        <span className="relative block h-14 w-full lg:h-16">
          <Image src={c.logo} alt={`${c.name} logo`} fill sizes="180px" className="object-contain" />
        </span>
      ) : (
        <span className="text-center font-heading text-lg leading-tight font-semibold text-ink">{c.name}</span>
      )}
    </li>
  );
}
