import { PageHero } from "./PageHero";

/** Shared layout for the privacy policy and terms pages. */
export function LegalPage({
  title,
  path,
  updated,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero crumbs={[{ name: title, path }]} title={title} intro={`Last updated: ${updated}`} />
      <section className="bg-sand py-14 md:py-20">
        <div className="container-site">
          <div className="prose-site mx-auto max-w-3xl rounded-[16px] bg-cream p-6 md:p-12">{children}</div>
        </div>
      </section>
    </>
  );
}
