import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { team } from "@/data/team";
import { pageMetadata } from "@/lib/seo";
import { stagger } from "@/lib/motion";
import { PageHero } from "@/components/ui/PageHero";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { GaugeIcon, ShieldIcon, UsersIcon, SparkIcon } from "@/components/ui/icons";
import { TrustBand } from "@/components/sections/TrustBand";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = pageMetadata({
  title: "About Us: A Guntur Web, App & Marketing Team",
  description:
    "Meet Ramakalpa Solutions, a website development, app development and digital marketing company in Chaitanyapuri, Guntur. Our story, mission, vision, values and technology stack.",
  path: "/about/",
});

const values = [
  { icon: ShieldIcon, title: "Honesty", text: "Clear quotes, realistic timelines and no promises we can't keep." },
  { icon: GaugeIcon, title: "Quality", text: "Fast, accessible, well-built work that holds up after launch." },
  { icon: UsersIcon, title: "Partnership", text: "We treat your business goals as our own and stay with you after launch." },
  { icon: SparkIcon, title: "Curiosity", text: "We keep learning so our clients benefit from modern tools and ideas." },
];

const stack = [
  { group: "Web", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"] },
  { group: "Mobile", items: ["React Native", "Flutter", "Kotlin", "Swift"] },
  { group: "Data & cloud", items: ["PostgreSQL", "MongoDB", "Firebase", "Vercel", "AWS"] },
  { group: "Marketing", items: ["Google Ads", "Meta Ads", "GA4", "Search Console", "Tag Manager"] },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about/" }]}
        eyebrow="About us"
        title={
          <>
            A Guntur team building <span className="text-violet">digital futures</span>
          </>
        }
        intro={`${siteConfig.name} helps businesses get online, get found and get enquiries, with websites, mobile apps and digital marketing built in Guntur, Andhra Pradesh.`}
      />

      <section className="section bg-sand" aria-labelledby="story-heading">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="story-heading"
              eyebrow="Our story"
              title={
                <>
                  Started in Guntur, <Highlight>working across India</Highlight>
                </>
              }
            />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-plum">
            {/* TODO: replace with your own story: when and why you started, and what you've learned. */}
            <p>
              Ramakalpa Solutions began with a simple idea: local businesses deserve the same quality of websites and apps that
              big brands use. Too many shops, clinics and startups were paying for slow, outdated sites that nobody could find on
              Google.
            </p>
            <p>
              From our office in Chaitanyapuri, Guntur, we build websites, apps and marketing for businesses ranging from
              healthcare platforms and online stores to schools, event companies and welfare societies, combining modern
              technology like Next.js with practical marketing that brings in enquiries.
            </p>
            <p>
              We still work the way we started: a small, focused team, clear communication, and a direct line to the people
              building your project.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-cream" aria-labelledby="mission-heading">
        <h2 id="mission-heading" className="sr-only">
          Mission and vision
        </h2>
        <div className="container-site grid gap-6 md:grid-cols-2">
          <div className="reveal reveal-left lift rounded-[16px] bg-night p-8 md:p-10">
            <p className="eyebrow">Mission</p>
            <h3 className="mt-4 text-2xl leading-snug font-semibold text-cream md:text-3xl">
              Help every business we work with win more customers online.
            </h3>
            <p className="mt-4 text-mist">
              By building fast, findable websites and apps, and marketing that is measured by enquiries, not likes.
            </p>
          </div>
          <div className="reveal lift rounded-[16px] bg-sand p-8 md:p-10" style={stagger(1)}>
            <p className="eyebrow">Vision</p>
            <h3 className="mt-4 text-2xl leading-snug font-semibold text-ink md:text-3xl">
              Be the most trusted digital partner for growing businesses in Andhra Pradesh.
            </h3>
            <p className="mt-4 text-plum">Known for honest advice, modern technology and long-term relationships.</p>
          </div>
        </div>
      </section>

      <section className="section bg-sand" aria-labelledby="values-heading">
        <div className="container-site">
          <SectionHeading
            id="values-heading"
            eyebrow="Values"
            title={
              <>
                What we <Highlight>stand for</Highlight>
              </>
            }
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="reveal lift group rounded-[14px] bg-cream p-6" style={stagger(i)}>
                <span className="tilt-icon grid size-12 place-items-center rounded-xl bg-lavender text-violet">
                  <Icon size={24} />
                </span>
                <h3 className="mt-4 font-sans text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-2 leading-relaxed text-plum">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-cream" aria-labelledby="team-heading">
        <div className="container-site">
          <SectionHeading
            id="team-heading"
            eyebrow="Team"
            title={
              <>
                The people <Highlight>behind the work</Highlight>
              </>
            }
          />
          {team.length > 0 ? (
            <ul className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {team.map((m) => (
                <li key={m.name} className="reveal">
                  <div className="relative aspect-square overflow-hidden rounded-[16px] bg-sand">
                    {m.photo && (
                      <Image src={m.photo} alt={`${m.name}, ${m.role}`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                    )}
                  </div>
                  <h3 className="mt-4 font-sans text-lg font-semibold text-ink">{m.name}</h3>
                  <p className="text-plum">{m.role}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-8 max-w-2xl rounded-[14px] bg-sand p-6 text-lg text-plum">
              Our team of designers, developers and marketers works from Guntur. Team profiles are coming soon. Visit us at the
              office or say hello on WhatsApp in the meantime.
            </p>
          )}
        </div>
      </section>

      <section className="section bg-sand" aria-labelledby="stack-heading">
        <div className="container-site">
          <SectionHeading
            id="stack-heading"
            eyebrow="Tech stack"
            title={
              <>
                Tools we <Highlight>build with</Highlight>
              </>
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((s, i) => (
              <div key={s.group} className="reveal lift rounded-[14px] bg-cream p-6" style={stagger(i)}>
                <h3 className="font-sans text-lg font-semibold text-ink">{s.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((t) => (
                    <li key={t} className="rounded-full bg-lavender px-3 py-1 text-sm font-medium text-violet-700">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBand />
      <CtaBanner />
    </>
  );
}
