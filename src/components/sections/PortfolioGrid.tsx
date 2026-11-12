"use client";

import { startTransition, useState, ViewTransition } from "react";
import type { Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

const filters = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "app", label: "App" },
  { key: "marketing", label: "Marketing" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export function PortfolioGrid({ projects, logos }: { projects: Project[]; logos: Record<string, boolean> }) {
  const [active, setActive] = useState<FilterKey>("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = f.key === "all" ? projects.length : projects.filter((p) => p.category === f.key).length;
          const pressed = active === f.key;
          return (
            <button
              key={f.key}
              type="button"
              aria-pressed={pressed}
              onClick={() => startTransition(() => setActive(f.key))}
              className={`min-h-11 rounded-full px-5 font-semibold transition-[background-color,color,transform] duration-200 active:scale-95 ${
                pressed ? "bg-ink text-cream" : "bg-cream text-ink hover:bg-lavender"
              }`}
            >
              {f.label} <span className={pressed ? "text-mist" : "text-plum"}>({count})</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} projects
      </p>
      {visible.length === 0 ? (
        <p className="mt-10 rounded-[14px] bg-cream p-8 text-center text-plum">
          Projects in this category are coming soon. Ask us for examples on WhatsApp.
        </p>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            // Each card keeps its identity, so filtering slides cards to their new
            // spot and fades the others in and out (View Transitions).
            <ViewTransition key={p.slug} name={`project-${p.slug}`} enter="card-enter" exit="card-exit" share="card-move" update="card-move" default="none">
              <li>
                <ProjectCard project={p} headingLevel="h2" hasLogo={logos[p.slug] ?? false} />
              </li>
            </ViewTransition>
          ))}
        </ul>
      )}
    </>
  );
}
