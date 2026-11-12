export type Faq = { q: string; a: string };

/** FAQs shown on the home page. Service FAQs live in services.ts. */
export const homeFaqs: Faq[] = [
  {
    q: "What services does Ramakalpa Solutions offer?",
    a: "We offer website development (Next.js, React and full-stack), Android and iOS app development, and digital marketing including SEO, social media management and Google and Meta ads.",
  },
  {
    q: "Where are you located?",
    a: "Our office is at 1st Line Chaitanyapuri, Opp Saibaba Temple, Guntur, Andhra Pradesh 522007. We work with clients across Guntur, Vijayawada, Andhra Pradesh and the rest of India.",
  },
  {
    q: "How much does a website cost?",
    a: "It depends on the number of pages and features. See our pricing page for starting packages, or send us your requirements for a free, no-obligation quote.",
  },
  {
    q: "When can you start?",
    a: "We can begin as soon as the scope and quote are agreed in writing.",
  },
  {
    q: "Do you work with businesses outside Guntur?",
    a: "Yes. We work with clients across India over phone, WhatsApp and video calls, and meet in person in Guntur and Vijayawada.",
  },
];
