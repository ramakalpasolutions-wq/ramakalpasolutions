/**
 * Single source of truth for business details, navigation and social links.
 * Edit this file to change contact info anywhere on the site.
 */

export const siteConfig = {
  name: "Ramakalpa Solutions",
  shortName: "Ramakalpa",
  url: "https://www.ramakalpasolutions.in",
  tagline: "We Build Digital Futures That Scale.",
  description:
    "Ramakalpa Solutions is a website development, app development and digital marketing company in Guntur, Andhra Pradesh. Fast Next.js websites, Android and iOS apps, SEO and Google and Meta ads.",
  locale: "en_IN",
  foundingCity: "Guntur",

  phone: {
    display: "+91 90105 61998",
    e164: "+919010561998",
    href: "tel:+919010561998",
  },
  whatsapp: {
    number: "919010561998",
    defaultMessage: "Hi Ramakalpa, I'm interested in ",
  },
  email: "customersupport@ramakalpasolutions.in",

  address: {
    street: "1st Line Chaitanyapuri, Opp Saibaba Temple",
    locality: "Guntur",
    region: "Andhra Pradesh",
    regionCode: "AP",
    postalCode: "522007",
    country: "IN",
    full: "1st Line Chaitanyapuri, Opp Saibaba Temple, Guntur, Andhra Pradesh 522007",
  },

  // Approximate coordinates for Chaitanyapuri, Guntur. Confirm from Google Maps
  // (right-click your pin → copy coordinates) and update.
  geo: { latitude: 16.3008, longitude: 80.4428 },

  hours: {
    display: "Mon–Sat, 9:30 AM – 6:30 PM",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:30",
    closes: "18:30",
  },

  social: {
    instagram: "https://www.instagram.com/rama_kalpa_solutions",
    facebook: "FACEBOOK_URL",
    linkedin: "LINKEDIN_URL",
  },

  areasServed: ["Guntur", "Vijayawada", "Andhra Pradesh", "India"],

  /** Google Analytics 4 measurement ID. NEXT_PUBLIC_GA_ID overrides it if set. */
  gaId: "G-M68PF9PNB7",
} as const;

/**
 * The three core services. Detailed page content lives in /src/data/services.ts,
 * prices in /src/data/pricing.ts.
 */
export const services = [
  {
    slug: "website-development",
    key: "web",
    name: "Website Development",
    short: "Next.js, React and full-stack websites",
    summary:
      "Fast, SEO-ready websites and web apps built with Next.js and React, from business sites to full-stack platforms.",
    tags: ["Next.js", "React", "Full-stack"],
  },
  {
    slug: "app-development",
    key: "app",
    name: "App Development",
    short: "Android and iOS apps",
    summary:
      "Android and iOS apps designed around your customers, from first prototype to Play Store and App Store launch.",
    tags: ["Android", "iOS", "Cross-platform"],
  },
  {
    slug: "digital-marketing",
    key: "marketing",
    name: "Digital Marketing",
    short: "SEO, social media, Google and Meta ads",
    summary:
      "SEO, social media and Google and Meta ads that bring enquiries to your phone, not just likes to your page.",
    tags: ["SEO", "Social media", "Google & Meta ads"],
  },
] as const;

export type Service = (typeof services)[number];
export type ServiceSlug = Service["slug"];
export type ServiceKey = Service["key"];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Options for the lead form's service and budget dropdowns. */
export const leadServiceOptions = [
  "Website Development",
  "App Development",
  "Digital Marketing",
  "Free Website Audit",
  "Not sure yet",
] as const;

export const leadBudgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "Above ₹2,00,000",
  "Not sure yet",
] as const;

export const mainNav = [
  { label: "Services", href: "/services/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
] as const;

/** A social URL is "real" once the placeholder has been replaced. */
export function isRealUrl(url: string): boolean {
  return url.startsWith("https://");
}

export function socialLinks() {
  const { social } = siteConfig;
  return [
    { label: "Instagram", href: social.instagram },
    { label: "Facebook", href: social.facebook },
    { label: "LinkedIn", href: social.linkedin },
  ].filter((s) => isRealUrl(s.href));
}

export function whatsappHref(message: string = siteConfig.whatsapp.defaultMessage): string {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}
