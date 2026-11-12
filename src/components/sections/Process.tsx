import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { stagger } from "@/lib/motion";

const defaultSteps = [
  { title: "Discuss", text: "We learn your goals, customers and budget, and agree on a clear scope." },
  { title: "Design", text: "You see and approve layouts and visuals before development starts." },
  { title: "Develop", text: "We build, share preview links and refine with your feedback." },
  { title: "Launch", text: "We test everything, go live and connect analytics and tracking." },
  { title: "Grow", text: "SEO, ads, updates and support to keep results improving." },
];

type Props = {
  steps?: { title: string; text: string }[];
  bg?: "sand" | "cream";
  title?: React.ReactNode;
};

export function Process({ steps = defaultSteps, bg = "sand", title }: Props) {
  return (
    <section className={`section ${bg === "sand" ? "bg-sand" : "bg-cream"}`} aria-labelledby="process-heading">
      <div className="container-site">
        <SectionHeading
          id="process-heading"
          eyebrow="How we work"
          title={
            title ?? (
              <>
                A simple <Highlight>five-step</Highlight> process
              </>
            )
          }
        />
        <ol className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {/* Connector that draws across the steps as you scroll (desktop) */}
          <li aria-hidden="true" className="pointer-events-none absolute top-[3.1rem] right-8 left-8 hidden lg:block">
            <span className="draw-line block h-0.5 origin-left bg-violet" />
          </li>
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`reveal lift group relative rounded-[14px] p-6 ${bg === "sand" ? "bg-cream" : "bg-sand"}`}
              style={stagger(i)}
            >
              <span className="tilt-icon inline-grid size-12 place-items-center rounded-full bg-lavender font-heading text-xl font-semibold text-violet-700">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-sans text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-plum">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
