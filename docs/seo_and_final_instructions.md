9. SEO & Metadata
Implement generateMetadata for each page:

// src/app/(marketing)/about/page.tsx
import type { Metadata } from "next";
import { getPageBySlug } from "@/lib/supabase/queries/pages";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("about");
  return {
    title: page?.seo_title ?? "About – eCommerce Playbook",
    description: page?.seo_description ?? "About Michael Muniz and eCommerce Playbook.",
  };
}

export default async function AboutPage() {
  const page = await getPageBySlug("about");
  // render...
}

For dynamic routes (blog posts, case studies, products), use the slug/handle to build SEO meta dynamically.

⸻

10. Environment Variables

Document required env vars:
	•	NEXT_PUBLIC_SUPABASE_URL
	•	NEXT_PUBLIC_SUPABASE_ANON_KEY
	•	SHOPIFY_STORE_DOMAIN (e.g. mystore.myshopify.com)
	•	SHOPIFY_STOREFRONT_TOKEN
	•	NEXT_PUBLIC_SITE_URL
	•	(optional) EMAIL_PROVIDER_API_KEY for contact form

⸻

11. Developer Notes for Cursor
	1.	Create project:
	•	Initialize a Next.js app (App Router, TypeScript, Tailwind).
	•	Organize folder structure exactly as described above.
	2.	Implement Supabase integration:
	•	Install and configure @supabase/supabase-js.
	•	Create Supabase tables matching the schema in this doc.
	•	Implement query functions in lib/supabase/queries/*.
	3.	Implement Shopify integration:
	•	Create lib/shopify/client.ts, products.ts, and collections.ts.
	•	Implement basic functions: list products, get product by handle, list collections, get collection by handle.
	4.	Implement routes:
	•	Create all pages under app as described, using the components and queries.
	•	Ensure each major page is SSR with optional revalidate (ISR) set to a reasonable default (e.g., 60–300 seconds).
	5.	Implement components:
	•	Build minimal versions of each component (Hero, BlogList, ProductCard, etc.) with simple but clean design.
	•	Use props-driven APIs for components; avoid direct data fetching inside them.
	6.	Implement tools system:
	•	Ensure /api/tools and /api/tools/[slug] return JSON from Supabase.
	•	Tools pages should consume Supabase data and render a standard template (hero + description + CTA + optional embed).
	7.	Implement contact form:
	•	Build a form on /contact with client-side validation.
	•	POST to /api/contact; for now, log or stub the email sending.
	8.	Add basic SEO:
	•	Implement generateMetadata for all major pages.
	•	Add Open Graph defaults in config/siteMeta.ts.
	9.	Make it headless-store ready:
	•	Product and collection pages should fully pull data from Shopify.
	•	Cart/checkout integration can be stubbed (e.g., “Add to Cart” button links to Shopify cart URL or is no-op with TODO).
	10.	Testing & linting:
	•	Add ESLint + Prettier configuration.
	•	Ensure TypeScript passes with strict mode enabled.

⸻

12. Optional Future Enhancements (Document but Don’t Implement Now)
	•	Add cart + checkout implemented via Shopify Cart API.
	•	Add Supabase-authenticated dashboard for internal tools.
	•	Add structured data (JSON-LD) for blog posts and products.
	•	Add search across blog, case studies, and tools.