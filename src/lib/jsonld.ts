import { absoluteUrl, services, siteConfig, socialLinks, type Service } from "@/config/site";
import type { Faq } from "@/data/faqs";
import { pricing } from "@/data/pricing";

const businessId = `${siteConfig.url}/#business`;

export function businessJsonLd() {
  const { address, geo, hours, phone } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": businessId,
    name: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/brand/ramakalpa-logo-dark.png"),
    image: absoluteUrl("/og-image.png"),
    telephone: phone.e164,
    email: siteConfig.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: geo.latitude, longitude: geo.longitude },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${siteConfig.name}, ${address.full}`)}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: hours.days,
        opens: hours.opens,
        closes: hours.closes,
      },
    ],
    areaServed: siteConfig.areasServed.map((name) => ({ "@type": "Place", name })),
    sameAs: socialLinks().map((s) => s.href),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phone.e164,
      email: siteConfig.email,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.summary,
          url: absoluteUrl(`/services/${s.slug}/`),
        },
      })),
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(service: Service, opts: { path: string; description: string; areaServed?: string[] }) {
  const offers = pricing[service.slug]
    .filter((p) => p.price !== null)
    .map((p) => ({
      "@type": "Offer",
      name: `${service.name} – ${p.tier}`,
      price: p.price,
      priceCurrency: "INR",
    }));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": businessId },
    areaServed: (opts.areaServed ?? siteConfig.areasServed).map((name) => ({ "@type": "Place", name })),
    ...(offers.length ? { offers } : {}),
  };
}

export function articleJsonLd(post: {
  title: string;
  description: string;
  path: string;
  date: string;
  updated?: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    mainEntityOfPage: absoluteUrl(post.path),
    image: absoluteUrl(`${post.path}og.png`),
    author: { "@type": "Organization", name: post.author, url: absoluteUrl("/") },
    publisher: { "@id": businessId },
  };
}
