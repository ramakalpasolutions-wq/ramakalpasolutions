import type { ServiceSlug } from "@/config/site";

/**
 * Starting packages per service.
 * Set `price` to a number in rupees (e.g. 14999) to show it.
 * Leave it as null to show "Get a quote" instead.
 */
export type Package = {
  tier: "Basic" | "Standard" | "Premium";
  price: number | null;
  /** Shown after the price, e.g. "one-time" or "/ month" */
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export const pricing: Record<ServiceSlug, Package[]> = {
  "website-development": [
    {
      tier: "Basic",
      price: null,
      period: "one-time",
      description: "A professional starter site for small businesses.",
      features: ["Up to 5 pages", "Mobile-first design", "Contact form and WhatsApp button", "On-page SEO basics", "Google Maps and Business Profile link"],
    },
    {
      tier: "Standard",
      price: null,
      period: "one-time",
      description: "For businesses that want a steady flow of enquiries.",
      features: ["Up to 12 pages", "Custom design", "Blog setup", "Lead forms with email alerts", "GA4 and Search Console setup", "Speed optimisation"],
      popular: true,
    },
    {
      tier: "Premium",
      price: null,
      period: "one-time",
      description: "E-commerce stores and custom web applications.",
      features: ["Custom pages and features", "E-commerce or booking system", "Payment gateway", "Admin dashboard", "Integrations and APIs", "Priority support"],
    },
  ],
  "app-development": [
    {
      tier: "Basic",
      price: null,
      period: "starting",
      description: "A focused first version of your app.",
      features: ["Android app", "Up to 8 screens", "Login and profile", "Admin panel (basic)", "Play Store publishing"],
    },
    {
      tier: "Standard",
      price: null,
      period: "starting",
      description: "Android and iOS from one codebase.",
      features: ["Android and iOS", "Custom UI/UX design", "Push notifications", "Payment gateway", "Backend and APIs", "Store publishing"],
      popular: true,
    },
    {
      tier: "Premium",
      price: null,
      period: "starting",
      description: "Complex, multi-user and marketplace apps.",
      features: ["Multiple user roles", "Real-time features and maps", "Advanced admin dashboard", "Third-party integrations", "Analytics", "3 months of support"],
    },
  ],
  "digital-marketing": [
    {
      tier: "Basic",
      price: null,
      period: "/ month",
      description: "Get visible on Google and social media.",
      features: ["Google Business Profile management", "12 social media posts", "1 platform for ads", "Monthly report"],
    },
    {
      tier: "Standard",
      price: null,
      period: "/ month",
      description: "Consistent leads from search and social.",
      features: ["Local SEO", "20 social media posts", "Google or Meta ads management", "Conversion tracking", "Monthly report and call"],
      popular: true,
    },
    {
      tier: "Premium",
      price: null,
      period: "/ month",
      description: "Full-funnel growth across channels.",
      features: ["SEO with content", "Social media management", "Google and Meta ads", "Landing page optimisation", "Fortnightly reports"],
    },
  ],
};

export function formatPrice(price: number | null): string {
  if (price === null) return "Get a quote";
  return `₹${price.toLocaleString("en-IN")}`;
}
