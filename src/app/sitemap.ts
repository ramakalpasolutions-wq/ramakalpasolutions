import type { MetadataRoute } from "next";
import { absoluteUrl, services } from "@/config/site";
import { localPages } from "@/data/locations";
import { publishedPosts } from "@/lib/blog";

/** Bump this when you change page content so search engines re-crawl. */
const CONTENT_UPDATED = "2026-11-11";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: absoluteUrl(path),
    lastModified: CONTENT_UPDATED,
    changeFrequency,
    priority,
  });

  const posts = publishedPosts();
  const blogUpdated = posts.reduce((latest, p) => ((p.updated ?? p.date) > latest ? (p.updated ?? p.date) : latest), CONTENT_UPDATED);

  return [
    page("/", 1, "weekly"),
    page("/services/", 0.9),
    ...services.map((s) => page(`/services/${s.slug}/`, 0.9)),
    ...localPages.map((p) => page(`/${p.slug}/`, 0.8)),
    page("/portfolio/", 0.7),
    page("/pricing/", 0.8),
    page("/about/", 0.6),
    page("/contact/", 0.8),
    { ...page("/blog/", 0.6, "weekly"), lastModified: blogUpdated },
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}/`),
      lastModified: p.updated ?? p.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    page("/privacy-policy/", 0.2, "yearly"),
    page("/terms/", 0.2, "yearly"),
  ];
}
