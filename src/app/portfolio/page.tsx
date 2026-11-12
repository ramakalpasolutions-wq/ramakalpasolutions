import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
import { pageMetadata } from "@/lib/seo";
import { publicFileExists } from "@/lib/public-file";
import { PageHero } from "@/components/ui/PageHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { TrustBand } from "@/components/sections/TrustBand";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio: Websites, Apps & Marketing Projects",
  description:
    "See websites, mobile apps and digital marketing projects by Ramakalpa Solutions for brands in Guntur, Vijayawada and across India. Filter by web, app or marketing.",
  path: "/portfolio/",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Portfolio", path: "/portfolio/" }]}
        eyebrow="Our work"
        title={
          <>
            Work we&apos;re <span className="text-violet">proud of</span>
          </>
        }
        intro="A selection of websites, apps and campaigns we've delivered. Filter by the type of project you're planning."
      />
      <section className="section bg-sand" aria-label="Projects">
        <div className="container-site">
          <PortfolioGrid
            projects={projects}
            logos={Object.fromEntries(projects.map((p) => [p.slug, publicFileExists(p.logo)]))}
          />
        </div>
      </section>
      <TrustBand />
      <CtaBanner />
    </>
  );
}
