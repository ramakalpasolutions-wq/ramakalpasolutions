# Ramakalpa Solutions website

Lead-generating company website for Ramakalpa Solutions, Guntur.
Built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4 and MDX. Every page is static HTML; the only server code is the lead form API.

---

## 1. Run it locally

You need Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:3000
```

Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Production build (also type-checks) |
| `npm run start` | Serve the production build locally |
| `npm run lint` | ESLint |

Without SMTP settings, form submissions in `npm run dev` are printed in the terminal instead of emailed.

---

## 2. Environment variables

Set these in `.env.local` for local work, and in **Vercel → Project → Settings → Environment Variables** for the live site.

| Variable | Required | What it is |
| --- | --- | --- |
| `SMTP_HOST` | Yes | Mail server. Your domain's email is on Hostinger: `smtp.hostinger.com` |
| `SMTP_PORT` | Yes | `465` (SSL, recommended) or `587` (STARTTLS) |
| `SMTP_SECURE` | Yes | `true` for 465, `false` for 587 |
| `SMTP_USER` | Yes | Full mailbox address, e.g. `customersupport@ramakalpasolutions.in` |
| `SMTP_PASS` | Yes | That mailbox's password (set in Hostinger hPanel → Emails) |
| `LEAD_TO_EMAIL` | Recommended | Inbox that receives leads. Comma-separate for several. Defaults to `SMTP_USER` |
| `LEAD_FROM_EMAIL` | Optional | Sender, e.g. `Ramakalpa Website <customersupport@ramakalpasolutions.in>`. Must be the `SMTP_USER` mailbox, or Hostinger rejects the email. Defaults to `Ramakalpa Website <SMTP_USER>` |
| `SHEETS_WEBHOOK_URL` | Optional | Google Apps Script web-app URL; every lead is also added as a row in a Google Sheet |
| `NEXT_PUBLIC_GA_ID` | Optional | Overrides the GA4 ID `G-M68PF9PNB7` set in `src/config/site.ts`. Analytics loads only on the live site, not in `npm run dev` or Vercel preview links |

Lead emails are sent with [Nodemailer](https://nodemailer.com) through your own mailbox (`src/lib/mailer.ts`), so there's no third-party email service to sign up for. Your domain's SPF record already allows Hostinger to send for `ramakalpasolutions.in`. If you also turn on DKIM in Hostinger (hPanel → Emails → your domain → DNS / DKIM), lead emails are even less likely to land in spam. When someone fills in their email on the form, clicking **Reply** in your inbox answers them directly.

**Using a different mail provider?** Change `SMTP_HOST`/`SMTP_PORT`: Google Workspace is `smtp.gmail.com` with an App Password; Zoho is `smtp.zoho.in`.

In production, if neither email nor the Sheet accepts a lead, the visitor sees an error asking them to call or WhatsApp, so leads are never silently lost.

### Optional: Google Sheet webhook

1. Create a Google Sheet. Add these headers in row 1: `submittedAt, type, name, phone, email, service, budget, message, website, source`.
2. Open **Extensions → Apps Script**, paste this and save:

   ```js
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
     const data = JSON.parse(e.postData.contents);
     const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
     sheet.appendRow(headers.map((h) => data[h] ?? ""));
     return ContentService.createTextOutput("ok");
   }
   ```

3. **Deploy → New deployment → Web app**, set "Who has access" to **Anyone**, and copy the URL into `SHEETS_WEBHOOK_URL`.

---

## 3. Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On [vercel.com](https://vercel.com) choose **Add New → Project**, import the repository. Vercel detects Next.js; keep the defaults.
3. Add the environment variables from section 2 (Production and Preview).
4. Click **Deploy**. Each push to the main branch redeploys automatically.

## 4. Connect the domain

1. In Vercel: **Project → Settings → Domains**, add `www.ramakalpasolutions.in` and `ramakalpasolutions.in`.
2. Set `www.ramakalpasolutions.in` as the primary domain and let the bare domain redirect to it (the site's canonical URLs all use `www`).
3. At your domain registrar, add the DNS records Vercel shows (usually an `A` record for the bare domain and a `CNAME` for `www` pointing to Vercel).
4. Wait for Vercel to show "Valid Configuration". HTTPS is issued automatically.
5. If old pages on the current site had different URLs, add redirects in `next.config.ts` (`async redirects()`) so existing Google rankings carry over.

## 5. Submit the sitemap

The sitemap is generated at `https://www.ramakalpasolutions.in/sitemap.xml` and listed in `/robots.txt`.

**Google Search Console**
1. Go to [search.google.com/search-console](https://search.google.com/search-console) → **Add property → Domain** → `ramakalpasolutions.in`.
2. Verify with the DNS TXT record it gives you (add it at your registrar).
3. Open **Sitemaps**, enter `sitemap.xml`, click **Submit**.
4. Use **URL Inspection → Request indexing** for the home page and the main service pages.

**Bing Webmaster Tools**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters) and sign in.
2. Choose **Import from Google Search Console** (fastest), or add the site and verify with DNS.
3. Open **Sitemaps → Submit sitemap** → `https://www.ramakalpasolutions.in/sitemap.xml`.

Also update your **Google Business Profile** website link to the new site.

---

## 6. Where to edit content

| What | File |
| --- | --- |
| Phone, WhatsApp, email, address, hours, map coordinates, social links, nav, service names, form dropdowns | `src/config/site.ts` |
| Service page text, included items, process, tech, FAQs | `src/data/services.ts` |
| Package prices and features | `src/data/pricing.ts` (`price: null` shows "Custom quote") |
| Portfolio projects | `src/data/portfolio.ts` (+ images in `public/portfolio/`) |
| Client logos | `src/data/clients.ts` (+ files in `public/clients/`) |
| Testimonials (section hidden while empty) | `src/data/testimonials.ts` |
| Team members (placeholder shown while empty) | `src/data/team.ts` (+ photos in `public/team/`) |
| Home page FAQs | `src/data/faqs.ts` |
| Local SEO pages (Guntur, Vijayawada) | `src/data/locations.ts` |
| Blog posts | `src/content/blog/*.mdx` |
| Colours and fonts | `src/app/globals.css` (`@theme`) and `src/app/layout.tsx` |
| Privacy policy / terms | `src/app/privacy-policy/page.tsx`, `src/app/terms/page.tsx` |
| Sitemap "last updated" date | `CONTENT_UPDATED` in `src/app/sitemap.ts` |

### Facebook and LinkedIn

Replace `FACEBOOK_URL` and `LINKEDIN_URL` in `src/config/site.ts` with your full page URLs (starting with `https://`). Until then those icons are hidden and left out of the structured data.

### Blog posts

1. Create `src/content/blog/your-post-slug.mdx` starting with:

   ```mdx
   export const metadata = {
     title: "Post title",
     description: "One or two sentence summary for Google.",
     date: "2026-12-01",
     author: "Ramakalpa Solutions",
     draft: true,
     tags: ["SEO"],
     services: ["digital-marketing"], // website-development | app-development | digital-marketing
     readingMinutes: 5,
   };

   Your article in Markdown. Use ## for headings (the title is the H1).
   ```

2. Register it in `src/lib/blog.ts` (one import line + one entry in `registry`).
3. Drafts show on `/blog/` only in `npm run dev`. In production they are hidden from the list, the sitemap and related links, and are `noindex`. Set `draft: false` to publish.

The two starter posts are drafts. Review them (especially the price ranges in the cost guide) before publishing.

### Local SEO pages

All six pages use one template (`src/app/[location]/page.tsx`). To add a city, copy an entry in `src/data/locations.ts`, change the `slug` and rewrite every text field; Google ignores near-duplicate pages. New entries are added to the sitemap and footer automatically.

---

## 7. How the lead features work

- **Lead form** (`src/components/forms/LeadForm.tsx`): on Home, all service pages, local pages and Contact. Zod validation in the browser (loaded only on submit) and again on the server. It still works with JavaScript off.
- **Spam protection**: a hidden honeypot field plus a per-IP limit of 5 submissions per 10 minutes (`src/lib/rate-limit.ts`). The limit is per server instance; for a strict global limit, swap in Upstash Redis.
- **API**: `src/app/api/lead/route.ts` emails the lead with Nodemailer (SMTP), optionally posts it to the Sheet, then the visitor goes to `/thank-you/` (noindex).
- **Exit-intent popup**: desktop only, after 8 seconds on a page, shown once per visitor (`localStorage`). Not shown on Contact or Thank-you.
- **GA4 `generate_lead` events**: `method: "form"` on successful submits, `"whatsapp"` and `"call"` on any WhatsApp or `tel:` link click (`src/components/layout/Analytics.tsx`). In GA4, mark `generate_lead` as a key event.
- **Pricing links** like `/contact/?service=app-development&plan=standard` pre-fill the form.

## 8. SEO built in

- Unique title, description, canonical, Open Graph and Twitter tags on every page (`src/lib/seo.ts`)
- `sitemap.xml`, `robots.txt` (blocks `/api/`, `/thank-you/` and `utm_` URLs), `manifest.webmanifest`
- JSON-LD: `ProfessionalService`/`LocalBusiness` site-wide, `BreadcrumbList` on inner pages, `FAQPage` on FAQ sections, `Service` on service and local pages, `Article` on published posts (`src/lib/jsonld.ts`)
- Generated share images in brand colours: `/og-image.png` and `/blog/<slug>/og.png` (`src/lib/og.tsx`)
- Real 404 status for unknown URLs, trailing-slash URLs, one H1 per page

Check structured data after launch with [Google's Rich Results Test](https://search.google.com/test/rich-results), and run Lighthouse (Chrome DevTools → Lighthouse → Mobile) on the live URL.

See **CHECKLIST.md** for everything still needed before launch.
