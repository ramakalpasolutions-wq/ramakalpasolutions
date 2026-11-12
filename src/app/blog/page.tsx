import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, listedPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { stagger } from "@/lib/motion";
import { PageHero } from "@/components/ui/PageHero";
import { AuditOffer } from "@/components/sections/AuditOffer";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = pageMetadata({
  title: "Blog: Websites, Apps & Digital Marketing Tips",
  description:
    "Practical guides on website costs, local SEO, Google and Meta ads and mobile apps for businesses in Guntur, Vijayawada and Andhra Pradesh, from Ramakalpa Solutions.",
  path: "/blog/",
});

export default function BlogIndexPage() {
  const posts = listedPosts();
  return (
    <>
      <PageHero
        crumbs={[{ name: "Blog", path: "/blog/" }]}
        eyebrow="Blog"
        title={
          <>
            Guides for <span className="text-violet">growing online</span>
          </>
        }
        intro="Straightforward advice on websites, apps and digital marketing for local businesses."
      />
      <section className="section bg-sand" aria-label="Articles">
        <div className="container-site">
          {posts.length === 0 ? (
            <p className="rounded-[14px] bg-cream p-8 text-center text-lg text-plum">
              New articles are on the way. Meanwhile, <Link href="/contact/" className="link">ask us anything</Link>.
            </p>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2">
              {posts.map((post, i) => (
                <li key={post.slug} className="reveal" style={stagger(i % 2)}>
                  <article className="lift group relative flex h-full flex-col rounded-[16px] bg-cream p-7">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-plum">
                      {post.draft && (
                        <span className="rounded-full bg-pink px-2.5 py-0.5 text-xs font-bold text-ink uppercase">Draft</span>
                      )}
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{post.readingMinutes} min read</span>
                    </div>
                    <h2 className="mt-3 text-2xl leading-snug font-semibold text-ink">
                      <Link href={`/blog/${post.slug}/`} className="after:absolute after:inset-0 after:rounded-[16px] group-hover:text-violet-700">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 flex-1 leading-relaxed text-plum">{post.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {post.tags.map((t) => (
                        <li key={t} className="rounded-full bg-lavender px-3 py-1 text-sm font-medium text-violet-700">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <AuditOffer />
      <CtaBanner />
    </>
  );
}
