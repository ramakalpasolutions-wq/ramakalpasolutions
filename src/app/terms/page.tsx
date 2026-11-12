import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms for using the Ramakalpa Solutions website and engaging our website, app development and digital marketing services.",
  path: "/terms/",
});

// Have this reviewed by a legal professional before relying on it.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" path="/terms/" updated="11 November 2026">
      <p>
        These terms apply to your use of this website and to services provided by {siteConfig.name}. Each project is also
        governed by the written proposal or agreement we share with you; if the two differ, the signed proposal applies.
      </p>

      <h2>Use of this website</h2>
      <p>
        The content on this website is for general information. Prices and packages shown are starting points and may change.
        A quote is binding only once confirmed in writing.
      </p>

      <h2>Quotes and payments</h2>
      <ul>
        <li>Project scope, timeline and fees are agreed in a written proposal before work starts.</li>
        <li>Projects are usually billed in milestones. Work may pause if a payment is overdue.</li>
        <li>Monthly marketing services are billed in advance. Advertising spend is paid directly to the ad platform.</li>
      </ul>

      <h2>Your responsibilities</h2>
      <p>
        You agree to provide content, feedback and approvals on time, and confirm you have the rights to any logos, images
        and text you give us.
      </p>

      <h2>Ownership</h2>
      <p>
        Once a project is paid in full, you own the final website or app, its content and its source code, except third-party
        tools, fonts, themes and libraries, which remain under their own licences.
      </p>

      <h2>Results</h2>
      <p>
        We work hard to deliver results, but search rankings, ad performance and sales depend on factors outside our control,
        such as Google and Meta, competition and the market. We do not guarantee specific rankings or revenue.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, our total liability for any claim relating to a project is limited to the fees you
        paid for that project.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India. Courts in Guntur, Andhra Pradesh have jurisdiction.</p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call {siteConfig.phone.display}. See
        our <Link href="/privacy-policy/">privacy policy</Link>.
      </p>
    </LegalPage>
  );
}
