# Launch checklist: what you still need to provide

Tick these off before pointing the domain at the new site.

## Accounts and keys
- [ ] **SMTP mailbox password** → `SMTP_PASS` for the mailbox in `SMTP_USER` (Hostinger hPanel → Emails). Host and port are already filled in `.env.example`
- [ ] **Lead inbox** → `LEAD_TO_EMAIL` (defaults to customersupport@ramakalpasolutions.in in `.env.example`)
- [ ] Optional: turn on **DKIM** for the domain in Hostinger so lead emails don't land in spam
- [x] **GA4 measurement ID** `G-M68PF9PNB7` added (`src/config/site.ts`)
- [ ] In GA4 → Admin → Events, mark **`generate_lead`** as a key event (it appears after the first form, call or WhatsApp click on the live site)
- [ ] Optional: **Google Sheet webhook** → `SHEETS_WEBHOOK_URL` (steps in README)
- [ ] Send a test enquiry on the live site and confirm the email (and Sheet row) arrive

## Brand assets
- [x] **Logo** added (header, footer, favicon, app icons, share image). Files in `public/brand/`
- [x] Client logos added for MEDLI, SUSALI, Arunas Baby World, Vijaya Varsha Events, The Bharatheeya Seva Welfare Society, DeepCode Labs, Automotive Car Care, AR and LDCE Warriors (`public/clients/`)
- [ ] **Higher-resolution Vijaya Varsha Events logo**: the one supplied is 64×64 px and looks soft on sharp screens. Replace `public/clients/vijaya-varsha-events.png`
- [ ] **Logos still missing** (names show as text until added): PD Events → `pd-events.png`, Firstlooks → `firstlooks.png`, Versetile → `versetile.png`, Kalakruthi → `kalakruthi.png`, Sri Krishna Academy → `srikrishna-academy.png`, all in `public/clients/`
- [ ] Rebuild after adding any logo file (the site checks for each file at build time)

## Content
- [ ] **Prices** for Basic / Standard / Premium per service → `src/data/pricing.ts` (currently "Custom quote")
- [ ] **Portfolio** (`src/data/portfolio.ts`): check the short descriptions for every project. Add live URLs for SUSALI, Vijaya Varsha Events, PD Events, Automotive Car Care, Bharatheeya Seva Welfare Society, Firstlooks, Versetile, Sri Krishna Academy, Kalakruthi and LDCE Warriors, and screenshots (`public/portfolio/`, ~1200×800) if you want screenshots instead of logos on the cards. Add any other projects you'd like to show
- [ ] **Testimonials**: real quotes with permission → `src/data/testimonials.ts` (section stays hidden until then)
- [ ] **Team**: names, roles, square photos → `src/data/team.ts`, `public/team/`
- [ ] **About page story**: replace the placeholder story in `src/app/about/page.tsx` (marked TODO) with your own history
- [ ] **Blog drafts**: review both posts in `src/content/blog/`, check the price ranges in the cost guide, then set `draft: false`
- [ ] **Office photos** (optional, good for trust and Google Business Profile)

## Business details
- [ ] **Facebook page URL** → replace `FACEBOOK_URL` in `src/config/site.ts`
- [ ] **LinkedIn page URL** → replace `LINKEDIN_URL` in `src/config/site.ts`
- [ ] **Map coordinates**: confirm `geo` in `src/config/site.ts` (currently approximate for Chaitanyapuri)
- [ ] Confirm business hours (Mon–Sat 9:30–18:30)
- [ ] **Legal review** of `/privacy-policy/` and `/terms/`

## Launch
- [ ] Deploy to Vercel and add environment variables
- [ ] Connect `www.ramakalpasolutions.in` (primary) and redirect the bare domain
- [ ] Add redirects for any old URLs from the current site
- [ ] Submit `sitemap.xml` in Google Search Console and Bing Webmaster Tools
- [ ] Update the website link on Google Business Profile, Instagram and other profiles
- [ ] Run Lighthouse (mobile) on the live site and the Rich Results Test on Home, a service page and a local page
