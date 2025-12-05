## eCommerce Playbook – Headless Shopify + Supabase Stack

This repo is a modular Next.js (App Router) starter for eCommerce Playbook, combining a marketing site, CMS-backed content, and a headless Shopify storefront. Pages are section-driven to keep content flexible and re-usable.

### Tech Stack
- Next.js 16 (App Router, ISR)
- TypeScript + ESLint (strict)
- Tailwind CSS v4
- Supabase (content + tools)
- Shopify Storefront API (products & collections)

### Project Structure
- `src/app/(marketing)` – homepage, about, faq, case studies, contact
- `src/app/(content)` – blog + tools (Supabase CMS)
- `src/app/(store)` – Shopify-powered shop routes
- `src/app/api/*` – contact, tools, and Shopify proxy routes
- `src/components` – modular section, UI, and store components
- `src/lib` – Supabase + Shopify clients, queries, and utilities
- `supabase/schema.sql` – seed schema for CMS tables

### Environment Variables
Create a `.env.local` file with:
```
NEXT_PUBLIC_SUPABASE_URL=<supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<supabase-anon-key>
SHOPIFY_STORE_DOMAIN=<store>.myshopify.com
SHOPIFY_STOREFRONT_TOKEN=<storefront-access-token>
NEXT_PUBLIC_SITE_URL=https://www.ecommerceplaybook.com
# Optional
EMAIL_PROVIDER_API_KEY=<resend-or-sendgrid-key>
```

### Scripts
- `npm run dev` – local development
- `npm run build` – production build
- `npm run start` – run compiled output
- `npm run lint` – ESLint (core web vitals config)

### Supabase
`supabase/schema.sql` contains the tables for pages, blog posts, case studies, FAQ items, and tools. Apply them via Supabase SQL editor or migrations before running the site.

### Shopify
The storefront pages and `/api/shopify/*` routes rely on Storefront API. Provide the domain + token in `.env.local`. The Add to Cart button is stubbed to redirect to the hosted PDP until cart APIs are integrated.

### Deployment
Deploy on Vercel with the above environment variables. All pages default to ISR (revalidate 120–300s) so marketing content stays fresh without rebuilds. Supabase + Shopify fetchers throw on error; ensure env vars are set before deploying.
