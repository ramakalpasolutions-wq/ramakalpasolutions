import Image from "next/image";
import type { Project } from "@/data/portfolio";

const categoryLabel = { web: "Website", app: "App", marketing: "Marketing" } as const;

type Props = {
  project: Project;
  headingLevel?: "h2" | "h3";
  /** Resolved on the server: whether project.logo exists in /public. */
  hasLogo: boolean;
};

export function ProjectCard({ project, headingLevel = "h3", hasLogo }: Props) {
  const Heading = headingLevel;
  return (
    <article className="lift group flex h-full flex-col overflow-hidden rounded-[16px] bg-sand">
      <div className={`relative aspect-[3/2] ${project.darkLogo && !project.image ? "bg-ink" : "bg-cream"}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="zoom object-cover"
          />
        ) : hasLogo ? (
          <Image
            src={project.logo!}
            alt={`${project.client} logo`}
            fill
            sizes="(min-width: 1024px) 20vw, 60vw"
            className="zoom object-contain p-10 sm:p-12"
          />
        ) : (
          <span aria-hidden="true" className="absolute inset-0 grid place-items-center p-6 text-center font-heading text-4xl font-semibold text-violet">
            {project.client}
          </span>
        )}
        <span className="absolute top-4 left-4 rounded-full bg-lavender px-3 py-1 text-xs font-bold tracking-wide text-violet-700 uppercase">
          {categoryLabel[project.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Heading className="text-2xl font-semibold text-ink">{project.title}</Heading>
        <p className="mt-2 flex-1 leading-relaxed text-plum">{project.description}</p>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="link mt-4 self-start">
            Visit site<span className="sr-only">: {project.title}</span>
          </a>
        )}
      </div>
    </article>
  );
}
