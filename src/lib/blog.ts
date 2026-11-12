import type { ServiceSlug } from "@/config/site";
import { metadata as costGuide } from "@/content/blog/website-development-cost-in-guntur-2026-guide.mdx";
import { metadata as leadsGuide } from "@/content/blog/how-local-businesses-in-andhra-pradesh-get-leads-from-google.mdx";

/**
 * Every blog post exports `metadata` with these fields.
 * Set `draft: false` to publish a post: it then appears on /blog/,
 * in the sitemap and in related-article links, and can be indexed by Google.
 */
export type PostFrontmatter = {
  title: string;
  description: string;
  /** ISO date, e.g. "2026-11-11" */
  date: string;
  updated?: string;
  author: string;
  draft: boolean;
  tags: string[];
  /** Services this post links to and is linked from. */
  services: ServiceSlug[];
  readingMinutes: number;
};

export type Post = PostFrontmatter & { slug: string };

/** Register each post here: slug → metadata. The slug must match the .mdx file name. */
const registry: Record<string, PostFrontmatter> = {
  "website-development-cost-in-guntur-2026-guide": costGuide,
  "how-local-businesses-in-andhra-pradesh-get-leads-from-google": leadsGuide,
};

const byDateDesc = (a: Post, b: Post) => b.date.localeCompare(a.date);

export const allPosts: Post[] = Object.entries(registry)
  .map(([slug, meta]) => ({ slug, ...meta }))
  .sort(byDateDesc);

/** Drafts are listed during `npm run dev` so you can review them, but hidden in production. */
export const showDrafts = process.env.NODE_ENV !== "production";

export function listedPosts(): Post[] {
  return allPosts.filter((p) => showDrafts || !p.draft);
}

export function publishedPosts(): Post[] {
  return allPosts.filter((p) => !p.draft);
}

export function getPost(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function postsForService(service: ServiceSlug): Post[] {
  return listedPosts().filter((p) => p.services.includes(service));
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00+05:30`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}
