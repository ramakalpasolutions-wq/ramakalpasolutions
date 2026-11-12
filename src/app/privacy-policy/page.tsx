import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Ramakalpa Solutions collects, uses and protects the information you share through our website and enquiry forms.",
  path: "/privacy-policy/",
});

// Have this reviewed by a legal professional before relying on it.
export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy/" updated="11 November 2026">
      <p>
        This policy explains how {siteConfig.name} (&quot;we&quot;, &quot;us&quot;) collects and uses personal information when
        you visit {siteConfig.url.replace("https://", "")} or contact us. We follow the Digital Personal Data Protection Act,
        2023 and other applicable Indian laws.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you give us:</strong> your name, phone number, email address, website address, the service and
          budget you select, and any message you send through our forms, WhatsApp, phone or email.
        </li>
        <li>
          <strong>Usage information:</strong> pages visited, device and browser type, approximate location and how you arrived
          on our site, collected through Google Analytics using cookies.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your enquiry and prepare quotes or audits you ask for</li>
        <li>To deliver and support the services you buy from us</li>
        <li>To understand how our website is used and improve it</li>
        <li>To prevent spam and misuse of our forms</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>Who we share it with</h2>
      <p>We use trusted service providers to run our website and handle enquiries, including:</p>
      <ul>
        <li>Vercel (website hosting)</li>
        <li>Resend (delivering enquiry emails to our team)</li>
        <li>Google (Analytics and, where used, Google Sheets for managing enquiries)</li>
      </ul>
      <p>These providers process data only on our instructions. We may also disclose information when required by law.</p>

      <h2>Cookies</h2>
      <p>
        We use analytics cookies to understand website traffic. You can block or delete cookies in your browser settings; the
        site will still work.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry details for as long as needed to respond and, if you become a client, for the duration of our work
        together and any period required by law.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us to access, correct or delete your personal information, or withdraw consent, by emailing{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We will respond within a reasonable time.
      </p>

      <h2>Contact</h2>
      <p>
        {siteConfig.name}, {siteConfig.address.full}. Phone: {siteConfig.phone.display}. Email:{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
      <p>
        See also our <Link href="/terms/">terms of service</Link>.
      </p>
    </LegalPage>
  );
}
