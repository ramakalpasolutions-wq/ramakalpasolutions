import type { ServiceSlug } from "@/config/site";
import type { Faq } from "@/data/faqs";

/**
 * Local SEO landing pages, all rendered by /src/app/[location]/page.tsx.
 * Each entry must have its own text. To add a city, copy an entry,
 * change the slug and rewrite every text field.
 */
export type LocalPage = {
  slug: string;
  city: "Guntur" | "Vijayawada";
  service: ServiceSlug;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  body: string[];
  localPoints: { title: string; text: string }[];
  industries: string[];
  areas: string[];
  faqs: Faq[];
};

const gunturAreas = [
  "Brodipet",
  "Arundelpet",
  "Lakshmipuram",
  "Kothapet",
  "Chandramouli Nagar",
  "Pattabhipuram",
  "Brindavan Gardens",
  "Nallapadu",
  "Gorantla",
  "Mangalagiri",
  "Tenali",
  "Narasaraopet",
];

const vijayawadaAreas = [
  "Benz Circle",
  "MG Road",
  "Governorpet",
  "Labbipet",
  "Moghalrajpuram",
  "Patamata",
  "Gunadala",
  "Auto Nagar",
  "Kanuru",
  "Poranki",
  "Gannavaram",
  "Ibrahimpatnam",
];

export const localPages: LocalPage[] = [
  {
    slug: "website-development-company-in-guntur",
    city: "Guntur",
    service: "website-development",
    metaTitle: "Website Development Company in Guntur",
    metaDescription:
      "Looking for a website development company in Guntur? Ramakalpa Solutions builds fast, mobile-first Next.js websites for Guntur businesses. Office in Chaitanyapuri. Free quote.",
    h1: "Website Development Company in Guntur",
    lead:
      "Ramakalpa Solutions is a Guntur-based web development team in Chaitanyapuri. We build fast, mobile-first websites that help local businesses get found on Google and contacted on WhatsApp.",
    body: [
      "Guntur customers search on their phones before they visit a shop, book a doctor or enquire about admissions. If your website is slow, hard to read on mobile or missing from Google, those customers go to the next result. We build websites with Next.js and React that load quickly on 4G, show your phone number and WhatsApp button on every page, and are structured so Google understands what you offer and where.",
      "Because we are based in Guntur, you can meet us at our office opposite the Saibaba Temple in Chaitanyapuri to discuss your project, review designs and sign off before launch. Many clients prefer that to working with a team they have never met.",
      "Whether you need a five-page site for a clinic in Brodipet, a product catalogue for a wholesale business near the market yard, or a booking system for a coaching institute, we scope the work clearly, agree on a price and timeline in writing, and hand over a site your team can update.",
    ],
    localPoints: [
      { title: "Meet us in Chaitanyapuri", text: "Discuss your project face to face at our Guntur office, Monday to Saturday." },
      { title: "Built for local search", text: "Pages structured around the services and Guntur neighbourhoods your customers search for." },
      { title: "Telugu and English content", text: "We can add Telugu sections so every customer understands your offer." },
      { title: "Fast on mobile data", text: "Lightweight pages that open quickly even on slower connections." },
    ],
    industries: ["Hospitals and clinics", "Schools and coaching centres", "Real estate developers", "Retail and textile shops", "Agri and wholesale traders", "Restaurants and hotels"],
    areas: gunturAreas,
    faqs: [
      {
        q: "Where is your office in Guntur?",
        a: "Our office is at 1st Line Chaitanyapuri, Opp Saibaba Temple, Guntur 522007. We are open Monday to Saturday, 9:30 AM to 6:30 PM. Please call or WhatsApp before visiting so we can make time for you.",
      },
      {
        q: "How much does a website cost in Guntur?",
        a: "The cost depends on the number of pages and features, such as e-commerce, booking or Telugu content. Send us your requirements and we will share a clear quote.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes. We can rebuild an old or slow website on modern technology while keeping your domain and existing Google rankings as safe as possible with proper redirects.",
      },
      {
        q: "Do you serve businesses in Tenali, Mangalagiri and Narasaraopet?",
        a: "Yes. We work with businesses across Guntur district, and most of the project can be handled over phone, WhatsApp and video calls.",
      },
    ],
  },
  {
    slug: "app-development-company-in-guntur",
    city: "Guntur",
    service: "app-development",
    metaTitle: "App Development Company in Guntur | Android & iOS",
    metaDescription:
      "Android and iOS app development company in Guntur. Ramakalpa Solutions designs, builds and publishes mobile apps for Guntur startups, schools, clinics and retailers. Free consultation.",
    h1: "Android and iOS App Development Company in Guntur",
    lead:
      "Have an app idea or a business process that belongs on your customers' phones? Our Guntur team designs, builds and launches Android and iOS apps, and stays with you after launch.",
    body: [
      "Guntur has a growing number of startups, educational institutions, hospitals and distributors that need more than a website: a parents' app for a school, an ordering app for a distributor's retailers, appointment booking for a clinic, or a delivery app for a local store. We plan these apps around the people who will use them every day, keep the first version focused, and build it so new features can be added later.",
      "Most users in Andhra Pradesh are on Android, so we often recommend launching on Android first or using a cross-platform build that covers Android and iOS from a single codebase. We explain the trade-offs in plain language and let you choose what fits your budget.",
      "You can review clickable designs on your own phone at our Chaitanyapuri office before development starts, and you get regular test builds as the app takes shape. When it is ready, we publish it to Google Play and the App Store under your own developer accounts.",
    ],
    localPoints: [
      { title: "Local team, regular demos", text: "See progress in person in Guntur or over a quick video call." },
      { title: "Android-first thinking", text: "Built and tested for the Android phones most of your users carry." },
      { title: "Telugu-ready interfaces", text: "Apps that support Telugu text for wider adoption." },
      { title: "You own everything", text: "Source code and store accounts are in your name." },
    ],
    industries: ["Schools and colleges", "Hospitals and diagnostics", "Distributors and wholesalers", "Local delivery and retail", "Startups", "Service businesses"],
    areas: gunturAreas,
    faqs: [
      {
        q: "How long does it take to build an app in Guntur?",
        a: "A focused first version usually takes 6 to 12 weeks. We confirm the exact timeline once we have agreed on the feature list.",
      },
      {
        q: "Can you build an app for my school or coaching institute?",
        a: "Yes. Typical features include attendance, homework, fee reminders, notices and parent communication. We will help you choose the features that matter most for the first release.",
      },
      {
        q: "Do I need both an app and a website?",
        a: "Usually yes. The website helps new customers find you on Google, while the app serves customers who already use your business regularly. We can build both so they share the same data.",
      },
      {
        q: "Can you take over an app another developer started?",
        a: "Often, yes. We first review the existing code and tell you honestly whether it is better to continue it or rebuild.",
      },
    ],
  },
  {
    slug: "digital-marketing-agency-in-guntur",
    city: "Guntur",
    service: "digital-marketing",
    metaTitle: "Digital Marketing Agency in Guntur | SEO & Ads",
    metaDescription:
      "Digital marketing agency in Guntur for local SEO, Google Business Profile, Instagram and Facebook management, Google Ads and Meta ads. Get more calls and WhatsApp enquiries.",
    h1: "Digital Marketing Agency in Guntur",
    lead:
      "We help Guntur businesses show up when local customers search on Google and scroll on Instagram, and we measure success in calls, WhatsApp messages and visits.",
    body: [
      "When someone in Guntur searches for a dentist near Brodipet or a school in Gorantla, Google shows a map with three businesses first. Getting into that list depends on a well-managed Google Business Profile, local reviews and a website that clearly matches the search. That is where most of our local SEO work begins.",
      "For faster results, we run Google Search ads for people already looking for your service, and Instagram and Facebook ads that reach people in specific Guntur pin codes, age groups and interests. Ads lead to WhatsApp chats, calls or short lead forms, so you can follow up the same day.",
      "Every month you get a short, plain-language report: how much was spent, how many enquiries came in, what changed in rankings, and what we will do next. No jargon, no long-term lock-in.",
    ],
    localPoints: [
      { title: "Google Maps visibility", text: "Optimise your Business Profile to appear in the local map results." },
      { title: "Pin-code targeted ads", text: "Spend your ad budget only on the Guntur areas you can serve." },
      { title: "WhatsApp-first leads", text: "Click-to-WhatsApp ads that start conversations directly." },
      { title: "Bilingual creatives", text: "Telugu and English posts and ads that feel local." },
    ],
    industries: ["Clinics and hospitals", "Real estate projects", "Education", "Jewellery and textiles", "Restaurants and cafés", "Home services"],
    areas: gunturAreas,
    faqs: [
      {
        q: "What is local SEO and why does it matter in Guntur?",
        a: "Local SEO helps your business appear in Google search and Maps results for people near you, such as 'physiotherapy clinic in Guntur'. Those searches come from people who are ready to visit or call, so they convert well.",
      },
      {
        q: "How much should I spend on ads in Guntur?",
        a: "It depends on your industry and goals. Many local businesses start with a modest daily budget and increase it once they see which campaigns bring enquiries. We recommend a starting budget after reviewing your business.",
      },
      {
        q: "Can you get us more Google reviews?",
        a: "We set up a simple process and review link so you can ask happy customers for reviews. We never buy or fake reviews, which violates Google's policies.",
      },
      {
        q: "Do you create the posts and ad designs?",
        a: "Yes. We plan, design and write the posts and ads, and share them with you for approval before they go live.",
      },
    ],
  },
  {
    slug: "website-development-company-in-vijayawada",
    city: "Vijayawada",
    service: "website-development",
    metaTitle: "Website Development Company in Vijayawada",
    metaDescription:
      "Website development for Vijayawada businesses: fast, SEO-ready Next.js websites, e-commerce stores and web apps by Ramakalpa Solutions. Meetings in Vijayawada, free quote.",
    h1: "Website Development Company in Vijayawada",
    lead:
      "Ramakalpa Solutions builds websites for Vijayawada businesses that need to stand out in a busy commercial city, from showrooms on MG Road to manufacturers and traders in Auto Nagar.",
    body: [
      "Vijayawada is one of the busiest trading and commercial centres in Andhra Pradesh, which means your customers compare several options before they call anyone. A clear, fast website that shows your products, prices or service areas and makes it easy to enquire gives you the edge in that comparison.",
      "We build with Next.js and React, the same technology used by large global brands, so your site scores well on Google's speed checks and stays secure. For retailers and distributors we can add product catalogues, enquiry carts or full online stores with payment gateways. For service businesses we focus on landing pages, local SEO and quick contact options.",
      "Our office is in Guntur, about an hour from Vijayawada, and we meet Vijayawada clients in person whenever it helps, alongside regular video calls and shared preview links while we build.",
    ],
    localPoints: [
      { title: "In-person meetings", text: "We travel to Vijayawada for kickoff and review meetings when needed." },
      { title: "Catalogues and e-commerce", text: "Product listings, enquiry carts and online payments for traders and retailers." },
      { title: "Stand out from competitors", text: "Distinct design and clear messaging in a crowded local market." },
      { title: "Search-ready structure", text: "Pages built around what Vijayawada customers actually search for." },
    ],
    industries: ["Auto parts and dealerships", "Wholesale and distribution", "Hospitals and diagnostics", "Real estate and construction", "Education and training", "Showrooms and retail"],
    areas: vijayawadaAreas,
    faqs: [
      {
        q: "Do you work with businesses in Vijayawada even though your office is in Guntur?",
        a: "Yes. Guntur and Vijayawada are close, and we regularly work with Vijayawada clients through in-person meetings, phone, WhatsApp and video calls.",
      },
      {
        q: "Can you build an online store for my Vijayawada shop?",
        a: "Yes. We build online stores with product catalogues, payment gateways, order notifications and delivery options, or a simpler enquiry-based catalogue if you prefer to close sales on WhatsApp.",
      },
      {
        q: "Will my new website help me rank on Google in Vijayawada?",
        a: "Every website includes on-page SEO: page titles, local business schema, a sitemap and fast loading. For ongoing ranking growth we recommend pairing it with our local SEO service.",
      },
      {
        q: "What do you need from me to get started?",
        a: "Your logo, a list of services or products, photos if you have them, and examples of websites you like. We guide you through the rest.",
      },
    ],
  },
  {
    slug: "app-development-company-in-vijayawada",
    city: "Vijayawada",
    service: "app-development",
    metaTitle: "App Development Company in Vijayawada | Android & iOS",
    metaDescription:
      "Mobile app development for Vijayawada businesses and startups. Android and iOS apps, ordering and booking apps, dealer apps and admin dashboards by Ramakalpa Solutions.",
    h1: "Mobile App Development Company in Vijayawada",
    lead:
      "From dealer ordering apps for Vijayawada distributors to booking apps for clinics and service providers, we build Android and iOS apps that make day-to-day business simpler.",
    body: [
      "A lot of business in Vijayawada still runs on phone calls, paper order books and WhatsApp forwards. A simple, well-designed app can replace much of that: dealers place orders from their phones, sales teams log visits, customers book and pay without calling. We start by understanding how your business works today, then design an app that fits that flow instead of forcing a new one.",
      "We build cross-platform apps that run on Android and iOS from one codebase, along with the backend, database and admin dashboard your team needs to manage orders, users and reports. When an app needs device features such as GPS tracking, barcode scanning or offline mode, we plan for them from the start.",
      "Our Guntur team works with Vijayawada clients through regular demos and test builds you can install on your own phone. After launch, we offer support plans for updates, new features and Android and iOS version changes.",
    ],
    localPoints: [
      { title: "Dealer and B2B apps", text: "Ordering, stock and payment tracking apps for distributors and wholesalers." },
      { title: "Booking and payments", text: "Appointment booking and online payments for service businesses." },
      { title: "Admin dashboards", text: "A web dashboard for your team to manage everything the app does." },
      { title: "Support after launch", text: "Updates, fixes and new features as your business grows." },
    ],
    industries: ["Distributors and dealers", "Auto Nagar businesses", "Clinics and labs", "Logistics and transport", "Education", "Startups"],
    areas: vijayawadaAreas,
    faqs: [
      {
        q: "Can you build an ordering app for my dealers?",
        a: "Yes. A dealer app usually includes a product catalogue with dealer-specific prices, order placement, order status, outstanding balances and notifications, plus an admin dashboard for your team.",
      },
      {
        q: "Should I build a native or cross-platform app?",
        a: "For most business apps, cross-platform is faster and more affordable because one codebase runs on Android and iOS. We recommend native only when an app needs very specific device features or performance.",
      },
      {
        q: "Can the app work without internet?",
        a: "Yes, we can design apps that save data offline and sync when the connection returns. This is useful for field sales teams and delivery staff.",
      },
      {
        q: "How do we stay updated on progress?",
        a: "You get regular test builds to install on your phone, short progress calls, and in-person meetings in Vijayawada when needed.",
      },
    ],
  },
  {
    slug: "digital-marketing-agency-in-vijayawada",
    city: "Vijayawada",
    service: "digital-marketing",
    metaTitle: "Digital Marketing Agency in Vijayawada | SEO & Ads",
    metaDescription:
      "Digital marketing for Vijayawada businesses: SEO, Google Business Profile, Google Ads, Instagram and Facebook ads and social media management by Ramakalpa Solutions.",
    h1: "Digital Marketing Agency in Vijayawada",
    lead:
      "Competition for attention in Vijayawada is high. We help you reach the right local customers with SEO, Google Ads and Meta ads, and track every enquiry they bring.",
    body: [
      "With so many businesses competing in categories like hospitals, real estate, education and retail, Vijayawada customers have plenty of choice. The businesses that win are the ones that appear first on Google, look credible on Instagram, and make it effortless to call or message. Our job is to put you in that position.",
      "We usually start with the foundations: a properly optimised Google Business Profile, landing pages that match what people search for, and conversion tracking so every call and form is counted. On top of that we run Google Search campaigns for high-intent searches and Instagram and Facebook campaigns aimed at specific Vijayawada localities such as Benz Circle, Patamata or Gunadala.",
      "Real estate projects, new clinics and admission seasons often need short, focused campaigns. We plan these around your dates and budget, and report weekly when it matters most.",
    ],
    localPoints: [
      { title: "Locality targeting", text: "Ads focused on the Vijayawada neighbourhoods you serve." },
      { title: "Campaigns around your dates", text: "Launches, admissions and festival offers planned in advance." },
      { title: "Every lead tracked", text: "Calls, WhatsApp chats and forms counted in one report." },
      { title: "Creative that stands out", text: "Ad designs and reels made for a crowded feed." },
    ],
    industries: ["Real estate projects", "Hospitals and clinics", "Education and admissions", "Retail and showrooms", "Restaurants", "Professional services"],
    areas: vijayawadaAreas,
    faqs: [
      {
        q: "Which works better in Vijayawada: Google Ads or Instagram ads?",
        a: "They do different jobs. Google Ads reach people already searching for your service, so leads are usually ready to buy. Instagram and Facebook ads build awareness and work well for offers, launches and visual businesses. Most clients use both.",
      },
      {
        q: "Can you run lead campaigns for a real estate project?",
        a: "Yes. We run Google and Meta campaigns with landing pages and lead forms for site visits, and pass leads to your sales team quickly so they can follow up.",
      },
      {
        q: "Do you need a long-term contract?",
        a: "No. We work month to month for most marketing plans. We recommend at least three months for SEO so you can see meaningful change.",
      },
      {
        q: "Can you handle our social media completely?",
        a: "Yes. We plan the content calendar, design posts and reels, write captions in Telugu or English, and publish on schedule after your approval.",
      },
    ],
  },
];

export function getLocalPage(slug: string): LocalPage | undefined {
  return localPages.find((p) => p.slug === slug);
}

export function localPagesForService(service: ServiceSlug): LocalPage[] {
  return localPages.filter((p) => p.service === service);
}
