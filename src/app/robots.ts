import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/thank-you/", "/*?utm_", "/*&utm_"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
