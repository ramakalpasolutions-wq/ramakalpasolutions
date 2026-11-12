import type { ServiceSlug } from "@/config/site";
import type { Faq } from "@/data/faqs";

export type ServiceDetail = {
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  included: { title: string; text: string }[];
  process: { title: string; text: string }[];
  tech: string[];
  faqs: Faq[];
};

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  "website-development": {
    metaTitle: "Website Development Services | Next.js & React",
    metaDescription:
      "Custom website development with Next.js, React and full-stack tools. Fast, mobile-first, SEO-ready business websites and web apps from Ramakalpa Solutions, Guntur.",
    headline: "Websites that load fast, rank well and turn visitors into enquiries",
    intro:
      "We design and build business websites, landing pages, e-commerce stores and custom web applications. Every site is mobile-first, built on Next.js and React, and set up for Google from day one, so it is easy to find and easy to contact you from.",
    included: [
      { title: "Custom design", text: "A layout designed for your brand and your customers, not a recycled template." },
      { title: "Mobile-first build", text: "Pages built for phones first, where most of your visitors arrive." },
      { title: "On-page SEO", text: "Titles, descriptions, schema markup, sitemap and clean URLs on every page." },
      { title: "Lead capture", text: "Enquiry forms, WhatsApp and click-to-call buttons wired to your inbox." },
      { title: "Speed optimisation", text: "Optimised images, minimal JavaScript and Core Web Vitals checked before launch." },
      { title: "Full-stack features", text: "Logins, dashboards, payments, bookings and integrations when you need them." },
      { title: "Analytics setup", text: "Google Analytics 4 and Search Console connected so you can see what works." },
      { title: "Launch support", text: "Domain, hosting, SSL and a handover walkthrough so your team can update content." },
    ],
    process: [
      { title: "Discuss", text: "We learn about your business, customers and goals, and agree on scope and budget." },
      { title: "Design", text: "You review page layouts and the visual style before any code is written." },
      { title: "Develop", text: "We build the site in Next.js, share a preview link and make revisions." },
      { title: "Launch", text: "We connect your domain, test every form and go live." },
      { title: "Grow", text: "Ongoing updates, SEO and support plans to keep the site working for you." },
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "MongoDB", "Vercel"],
    faqs: [
      {
        q: "How long does it take to build a website?",
        a: "A standard business website usually takes 2 to 4 weeks from the first discussion to launch. Larger e-commerce or custom web applications take longer, and we share a timeline before work begins.",
      },
      {
        q: "Will my website work well on mobile phones?",
        a: "Yes. We design for mobile first and test on real phones before launch, because most local customers search and call from their phone.",
      },
      {
        q: "Do you help with domain, hosting and business email?",
        a: "Yes. We can register your domain, set up hosting and SSL, and connect business email, or work with the accounts you already have.",
      },
      {
        q: "Can I update the website content myself?",
        a: "Yes. We can add a simple content editor or show you how to update text and images. We also offer maintenance plans if you prefer us to handle updates.",
      },
      {
        q: "Is SEO included in website development?",
        a: "Every site includes on-page SEO basics: page titles, descriptions, schema markup, a sitemap and fast loading. Ongoing SEO to grow rankings is available as part of our digital marketing service.",
      },
    ],
  },

  "app-development": {
    metaTitle: "Android & iOS App Development Services",
    metaDescription:
      "Android and iOS app development for startups and businesses. UI/UX design, cross-platform and native apps, backend APIs and Play Store / App Store launch by Ramakalpa Solutions.",
    headline: "Android and iOS apps your customers will actually keep using",
    intro:
      "From a first idea to a published app, we design, build and launch mobile apps for Android and iOS. We plan the features that matter for your first release, build a reliable backend, and help you publish on the Play Store and App Store.",
    included: [
      { title: "Product planning", text: "We turn your idea into a clear feature list and a realistic first release." },
      { title: "UI/UX design", text: "Clickable designs you can try on your phone before development starts." },
      { title: "Android and iOS", text: "Cross-platform or native builds, chosen to fit your budget and features." },
      { title: "Backend and APIs", text: "Secure servers, databases and admin panels to run your app." },
      { title: "Payments and notifications", text: "Payment gateways, push notifications, maps and logins as needed." },
      { title: "Testing", text: "Testing on real Android and iOS devices before every release." },
      { title: "Store launch", text: "Play Store and App Store listings, screenshots and submission handled for you." },
      { title: "Maintenance", text: "OS updates, bug fixes and new features after launch." },
    ],
    process: [
      { title: "Discuss", text: "We map your users, core features and budget into a first-release plan." },
      { title: "Design", text: "Wireframes and app screens you can tap through on your phone." },
      { title: "Develop", text: "We build the app and backend in short cycles with regular test builds." },
      { title: "Launch", text: "We prepare store listings and publish to Google Play and the App Store." },
      { title: "Grow", text: "We track usage, fix issues and plan the next set of features with you." },
    ],
    tech: ["React Native", "Flutter", "Kotlin", "Swift", "Node.js", "Firebase", "PostgreSQL", "REST & GraphQL APIs"],
    faqs: [
      {
        q: "Should I build for Android, iOS or both?",
        a: "In Andhra Pradesh most users are on Android, so many businesses start there. A cross-platform build lets you launch on both Android and iOS from one codebase, often at a lower cost than two separate apps.",
      },
      {
        q: "How long does it take to build an app?",
        a: "A focused first version typically takes 6 to 12 weeks depending on features. We agree on the scope and timeline in writing before development starts.",
      },
      {
        q: "Do you publish the app to the Play Store and App Store?",
        a: "Yes. We prepare store listings and screenshots and handle submission. The developer accounts are created in your name so you own the app.",
      },
      {
        q: "Will I own the source code?",
        a: "Yes. Once the project is paid for, the source code and app store accounts belong to you.",
      },
      {
        q: "Do you offer support after the app is launched?",
        a: "Yes. We offer maintenance plans that cover OS updates, bug fixes, server monitoring and new features.",
      },
    ],
  },

  "digital-marketing": {
    metaTitle: "Digital Marketing Services | SEO, Google & Meta Ads",
    metaDescription:
      "Digital marketing that generates leads: local SEO, Google Business Profile, social media management, Google Ads and Meta (Facebook & Instagram) ads. Ramakalpa Solutions, Guntur.",
    headline: "Marketing that brings calls, WhatsApp messages and walk-ins",
    intro:
      "We help local and growing businesses get found on Google and seen on Instagram and Facebook. We focus on enquiries rather than vanity numbers, with clear monthly reports on what your budget is doing.",
    included: [
      { title: "Local SEO", text: "Rank in Google search and Maps for the services and areas you serve." },
      { title: "Google Business Profile", text: "Profile setup, posts, photos and review strategy." },
      { title: "Google Ads", text: "Search and Performance Max campaigns aimed at calls and form leads." },
      { title: "Meta ads", text: "Facebook and Instagram campaigns with lead forms and WhatsApp click-to-chat." },
      { title: "Social media management", text: "Monthly content calendar, post design and captions." },
      { title: "Content marketing", text: "Blog articles and landing pages that answer what customers search for." },
      { title: "Conversion tracking", text: "GA4 and ad pixels set up so every lead is counted." },
      { title: "Monthly reporting", text: "Plain-language reports on spend, leads and next steps." },
    ],
    process: [
      { title: "Discuss", text: "We review your current visibility, competitors and goals." },
      { title: "Design", text: "We plan keywords, audiences, creatives and a monthly budget." },
      { title: "Develop", text: "We set up tracking, landing pages, profiles and campaigns." },
      { title: "Launch", text: "Campaigns go live and we watch the early data closely." },
      { title: "Grow", text: "Each month we cut what doesn't work and invest more in what does." },
    ],
    tech: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Search Console", "Google Business Profile", "Tag Manager"],
    faqs: [
      {
        q: "How soon will I see results from digital marketing?",
        a: "Paid ads on Google and Meta can start bringing enquiries within the first few weeks. SEO builds more slowly, and most businesses see steady improvement over 3 to 6 months.",
      },
      {
        q: "Is the ad budget included in your fee?",
        a: "No. Your ad spend is paid directly to Google or Meta from your own account. Our fee covers strategy, setup, creatives, management and reporting.",
      },
      {
        q: "Do you guarantee first-page rankings on Google?",
        a: "No honest agency can guarantee rankings, because Google controls them. We follow Google's guidelines and focus on the work that improves your visibility and leads over time.",
      },
      {
        q: "Can you manage our Instagram and Facebook pages?",
        a: "Yes. We plan a monthly content calendar, design posts, write captions and publish them, and we can run ads alongside.",
      },
      {
        q: "Will I get reports?",
        a: "Yes. You get a simple monthly report showing spend, enquiries, rankings and what we plan to do next.",
      },
    ],
  },
};
