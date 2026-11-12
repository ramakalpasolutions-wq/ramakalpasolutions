import { GaugeIcon, MapPinIcon, SearchIcon, ShieldIcon, ChatIcon, UsersIcon } from "@/components/ui/icons";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { stagger } from "@/lib/motion";

const reasons = [
  { icon: MapPinIcon, title: "A local team you can meet", text: "Our office is in Chaitanyapuri, Guntur. Discuss your project face to face, not just over email." },
  { icon: GaugeIcon, title: "Fast by default", text: "Modern Next.js builds that load quickly on mobile data and score well on Google's speed checks." },
  { icon: SearchIcon, title: "SEO from day one", text: "Clean structure, schema markup and local SEO basics are part of every build, not an extra." },
  { icon: ChatIcon, title: "Built for enquiries", text: "WhatsApp, click-to-call and short forms placed where customers actually decide to contact you." },
  { icon: ShieldIcon, title: "You own everything", text: "Your domain, code, app store accounts and ad accounts stay in your name." },
  { icon: UsersIcon, title: "Clear communication", text: "Fixed scope, written quotes, regular previews and plain-language updates." },
];

export function WhyChooseUs() {
  return (
    <section className="section bg-cream" aria-labelledby="why-heading">
      <div className="container-site">
        <SectionHeading
          id="why-heading"
          eyebrow="Why Ramakalpa"
          title={
            <>
              Why businesses <Highlight>choose us</Highlight>
            </>
          }
        />
        <ul className="mt-12 -mx-3 grid gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="reveal group flex gap-4 rounded-[14px] p-3 transition-colors hover:bg-sand" style={stagger(i % 3)}>
              <span className="tilt-icon grid size-12 shrink-0 place-items-center rounded-xl bg-lavender text-violet">
                <Icon size={24} />
              </span>
              <div>
                <h3 className="font-sans text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 leading-relaxed text-plum">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
