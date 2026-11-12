import Link from "next/link";
import { featuredProjects } from "@/data/portfolio";
import { publicFileExists } from "@/lib/public-file";
import { stagger } from "@/lib/motion";
import { Highlight, SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function FeaturedPortfolio() {
  if (featuredProjects.length === 0) return null;
  return (
    <section className="section bg-cream" aria-labelledby="work-heading">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="work-heading"
            eyebrow="Featured work"
            title={
              <>
                Recent <Highlight>projects</Highlight>
              </>
            }
          />
          <Link href="/portfolio/" className="btn btn-outline self-start md:self-auto">
            View all work
          </Link>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.slice(0, 3).map((p, i) => (
            <li key={p.slug} className="reveal" style={stagger(i)}>
              <ProjectCard project={p} hasLogo={publicFileExists(p.logo)} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
