import type { Metadata } from "next";
import { homeFaqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { TrustBand } from "@/components/sections/TrustBand";
import { FeaturedPortfolio } from "@/components/sections/FeaturedPortfolio";
import { AuditOffer } from "@/components/sections/AuditOffer";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = pageMetadata({
  title: "Website, App Development & Digital Marketing Company in Guntur | Ramakalpa Solutions",
  absoluteTitle: true,
  description:
    "Ramakalpa Solutions builds fast Next.js websites, Android and iOS apps and runs SEO, Google and Meta ads for businesses in Guntur, Vijayawada and across India. Get a free quote.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <WhyChooseUs />
      <Process />
      <TrustBand />
      <FeaturedPortfolio />
      <AuditOffer />
      <Testimonials />
      <FaqSection faqs={homeFaqs} bg="cream" />
      <CtaBanner bg="sand" />
    </>
  );
}
