import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/config/site";
import { allPosts, formatDate, getPost } from "@/lib/blog";
import { localPagesForService } from "@/data/locations";
import { pageMetadata } from "@/lib/seo";
import { articleJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RelatedLinks } from "@/components/sections/RelatedLinks";
import { CtaBanner } from "@/components/sections/CtaBanner";

type Props = { params: Promise<{ slug: string }> };

// Drafts are prerendered too (so you can preview them), but they are
// noindexed and left out of the blog list, sitemap and related links.
// Only the slugs below exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
    noindex: post.draft,
    image: `/blog/${post.slug}/og.png`,
    imageAlt: post.title,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/blog/${post.slug}.mdx`);
  const path = `/blog/${post.slug}/`;

  const serviceLinks = post.services.flatMap((s) => {
    const service = getService(s);
    return service ? [{ href: `/services/${s}/`, label: service.name, note: service.short }] : [];
  });
  const localLinks = post.services.flatMap((s) =>
    localPagesForService(s).map((p) => ({ href: `/${p.slug}/`, label: `${getService(s)?.name} in ${p.city}` })),
  );

  return (
    <>
      {!post.draft && (
        <JsonLd
          data={articleJsonLd({
            title: post.title,
            description: post.description,
            path,
            date: post.date,
            updated: post.updated,
            author: post.author,
          })}
        />
      )}
      <article>
        <header className="bg-cream pt-10 pb-12 md:pt-14 md:pb-16">
          <div className="container-site max-w-4xl">
            <Breadcrumbs
              items={[
                { name: "Blog", path: "/blog/" },
                { name: post.title, path },
              ]}
            />
            {post.draft && (
              <p className="mb-5 rounded-xl bg-[#ffe0ee] px-4 py-3 font-semibold text-ink">
                Draft preview: not listed or indexed. Set <code>draft: false</code> in the post to publish.
              </p>
            )}
            <h1 className="text-4xl leading-[1.12] font-semibold text-ink md:text-5xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-plum md:text-xl">{post.description}</p>
            <p className="mt-6 flex flex-wrap gap-x-3 text-sm text-plum">
              <span>By {post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
            </p>
          </div>
        </header>
        <div className="bg-sand py-12 md:py-16">
          <div className="container-site grid max-w-6xl gap-10 lg:grid-cols-[1fr_17rem]">
            <div className="prose-site min-w-0 rounded-[16px] bg-cream p-6 md:p-12">
              <Content />
            </div>
            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start" aria-label="Related pages">
              <RelatedLinks title="Our services" links={serviceLinks} />
              <RelatedLinks title="Local pages" links={localLinks} />
            </aside>
          </div>
        </div>
      </article>
      <CtaBanner />
    </>
  );
}
