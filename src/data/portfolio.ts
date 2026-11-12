import type { ServiceKey } from "@/config/site";

/**
 * Portfolio projects. Shown on /portfolio/ and (when featured) on the home page.
 * Only describe work you did; don't add results you can't back up.
 */
export type Project = {
  slug: string;
  title: string;
  client: string;
  category: ServiceKey; // "web" | "app" | "marketing"
  description: string;
  /** Screenshot under /public, e.g. "/portfolio/medli.jpg" (1200×800 works well). Shown instead of the logo. */
  image?: string;
  /** Client logo under /public. Shown when there's no screenshot. */
  logo?: string;
  /** Show the logo on a dark background (for logos with white or light lettering). */
  darkLogo?: boolean;
  url?: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "medli-app",
    title: "MEDLI",
    client: "MEDLI",
    category: "app",
    description: "Healthcare booking app for MEDLI, connecting patients with healthcare services.",
    logo: "/clients/medli.png",
    url: "https://www.medli.in",
    tags: ["Healthcare", "App"],
    featured: true,
  },
  {
    slug: "susali-app",
    title: "SUSALI Healthcare app",
    client: "SUSALI Healthcare",
    category: "app",
    description: "Android and iOS app for SUSALI staff and cluster managers to create and track patient referrals.",
    logo: "/clients/susali.png",
    tags: ["Healthcare", "Android", "iOS"],
    featured: true,
  },
  {
    slug: "susali-website",
    title: "SUSALI Healthcare website",
    client: "SUSALI Healthcare",
    category: "web",
    description: "Healthcare website with services, a healthcare network directory, FAQs and enquiry forms.",
    logo: "/clients/susali.png",
    tags: ["Healthcare", "Website"],
  },
  {
    slug: "arunas-baby-world",
    title: "Arunas Baby World",
    client: "Arunas Baby World",
    category: "web",
    description: "Online store for baby and kids products with category browsing, online payments and an admin dashboard.",
    logo: "/clients/arunasbabyworld.png",
    url: "https://www.arunasbabyworld.com",
    tags: ["E-commerce", "Website"],
    featured: true,
  },
  {
    slug: "vijaya-varsha-events",
    title: "Vijaya Varsha Events",
    client: "Vijaya Varsha Events",
    category: "web",
    description: "Website for Vijaya Varsha Events, an events company.",
    logo: "/clients/vijaya-varsha-events.png",
    tags: ["Events", "Website"],
  },
  {
    slug: "pd-events",
    title: "PD Events",
    client: "PD Events",
    category: "web",
    description: "Website for PD Events, an events company.",
    logo: "/clients/pd-events.png",
    tags: ["Events", "Website"],
  },
  {
    slug: "automotive-car-care",
    title: "Automotive Car Care",
    client: "Automotive Car Care",
    category: "web",
    description: "Website for Automotive Car Care, a car care business.",
    logo: "/clients/automotive.png",
    darkLogo: true,
    tags: ["Automotive", "Website"],
  },
  {
    slug: "deepcode-labs",
    title: "DeepCode Labs",
    client: "DeepCode Labs",
    category: "web",
    description: "Website for DeepCode Labs, a technology company.",
    logo: "/clients/deepcode-labs.png",
    url: "https://www.deepcodelabs.io",
    tags: ["Technology", "Website"],
  },
  {
    slug: "bharatheeya-seva-welfare-society",
    title: "The Bharatheeya Seva Welfare Society",
    client: "The Bharatheeya Seva Welfare Society",
    category: "web",
    description: "Website for The Bharatheeya Seva Welfare Society, a registered welfare society in Addanki.",
    logo: "/clients/bharatheeya.png",
    tags: ["Non-profit", "Website"],
  },
  {
    slug: "ldce-warriors",
    title: "LDCE Warriors",
    client: "LDCE Warriors",
    category: "web",
    description: "Online preparation platform for Limited Departmental Competitive Exams (LDCE).",
    logo: "/clients/ldce-warriors.png",
    tags: ["Education", "Website"],
  },
  {
    slug: "firstlooks",
    title: "Firstlooks",
    client: "Firstlooks",
    category: "web",
    description: "Website design and development for Firstlooks.",
    logo: "/clients/firstlooks.png",
    tags: ["Website"],
  },
  {
    slug: "versetile",
    title: "Versetile",
    client: "Versetile",
    category: "web",
    description: "Website design and development for Versetile.",
    logo: "/clients/versetile.png",
    tags: ["Website"],
  },
  {
    slug: "sri-krishna-academy",
    title: "Sri Krishna Academy",
    client: "Sri Krishna Academy",
    category: "web",
    description: "Website for Sri Krishna Academy, an educational institution.",
    logo: "/clients/srikrishna-academy.png",
    tags: ["Education", "Website"],
  },
  {
    slug: "kalakruthi",
    title: "Kalakruthi",
    client: "Kalakruthi",
    category: "marketing",
    description: "Search engine optimisation (SEO) to improve Kalakruthi's visibility on Google.",
    logo: "/clients/kalakruthi.png",
    tags: ["SEO"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
