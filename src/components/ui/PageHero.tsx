import { stagger } from "@/lib/motion";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

type Props = {
  title: React.ReactNode;
  intro?: React.ReactNode;
  eyebrow?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
};

/** Top section of inner pages. Holds the page's single H1. */
export function PageHero({ title, intro, eyebrow, crumbs, children }: Props) {
  return (
    <section className="bg-cream pt-10 pb-14 md:pt-14 md:pb-20">
      <div className="container-site hero-in">
        {crumbs && (
          <div style={stagger(0)}>
            <Breadcrumbs items={crumbs} />
          </div>
        )}
        {eyebrow && (
          <p className="eyebrow mb-5" style={stagger(1)}>
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-[clamp(2.1rem,6vw,3.75rem)] leading-[1.1] font-semibold text-ink" style={stagger(1)}>
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-plum md:text-xl" style={stagger(2)}>
            {intro}
          </p>
        )}
        {children && <div style={stagger(3)}>{children}</div>}
      </div>
    </section>
  );
}
