import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageSeo = {
  /** Page title without the brand; the root layout appends " | Ramakalpa Solutions". */
  title: string;
  description: string;
  /** Path with leading and trailing slash, e.g. "/services/". */
  path: string;
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Use the title exactly as given (no brand suffix). */
  absoluteTitle?: boolean;
  /** Social share image path. Defaults to the site-wide image from src/app/og-image.png/route.tsx */
  image?: string;
  imageAlt?: string;
};

/** Builds unique title, description, canonical, Open Graph and Twitter tags for a page. */
export function pageMetadata({
  title,
  description,
  path,
  noindex,
  type = "website",
  publishedTime,
  modifiedTime,
  absoluteTitle,
  image = "/og-image.png",
  imageAlt = `${siteConfig.name}: We Build Digital Futures That Scale`,
}: PageSeo): Metadata {
  const ogImage = { url: image, width: 1200, height: 630, alt: imageAlt };
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
