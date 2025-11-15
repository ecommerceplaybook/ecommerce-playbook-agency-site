7. Page Templates & Components
7.1 Global Layout

// src/app/(marketing)/layout.tsx
import type { ReactNode } from "react";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

Create similar layout if you want separate (store) or (content) route groups, or share one global.

7.2 Homepage
	•	Fetch from Supabase pages with slug = 'home' for hero text + general content.
	•	Compose components:
	•	Hero
	•	ServiceGrid
	•	CaseStudyCarousel
	•	LogoCloud
	•	Blog preview (BlogList limited to 3)
	•	CTASection

// src/app/(marketing)/page.tsx
import { getPageBySlug } from "@/lib/supabase/queries/pages";
import { getCaseStudies } from "@/lib/supabase/queries/caseStudies";
import { getBlogPosts } from "@/lib/supabase/queries/blog";
import { Hero } from "@/components/marketing/Hero";
import { CaseStudyCarousel } from "@/components/marketing/CaseStudyCarousel";
import { BlogList } from "@/components/content/BlogList";
import { CTASection } from "@/components/marketing/CTASection";

export default async function HomePage() {
  const [page, caseStudies, posts] = await Promise.all([
    getPageBySlug("home"),
    getCaseStudies(),
    getBlogPosts(),
  ]);

  return (
    <>
      <Hero
        heading={page?.hero_heading ?? "Conversion-led eCommerce builds"}
        subheading={page?.hero_subheading ?? "We fix your funnel before you scale your ads."}
      />
      <CaseStudyCarousel caseStudies={caseStudies.filter((c) => c.featured)} />
      <BlogList posts={posts.slice(0, 3)} />
      <CTASection />
    </>
  );
}

7.3 About Page
	•	Data from pages table (slug = 'about').
	•	Optionally include a timeline component + values list.

7.4 FAQ Page
	•	Fetch getFAQItems
	•	Render via FAQSection with accordions.

7.5 Case Studies
	•	/case-studies: list with CaseStudyCard.
	•	/case-studies/[slug]: full StoryBrand-ish narrative.

Use static params or dynamic route with generateStaticParams and revalidate.

7.6 Contact Page
	•	Present form (name, email, project type, budget range, message).
	•	POST to /api/contact.
	•	Use standard form handling with client component + fetch.

7.7 Blog
	•	BlogList on index page.
	•	BlogPostBody for rich text or markdown.

If using markdown, add a renderer (e.g., remark), but this spec can just instruct Cursor to wire a simple renderer.

7.8 Tools
	•	/tools uses ToolList → cards for each tool.
	•	/tools/[slug] uses ToolDetailSection + maybe embed the tool via iframe or internal UI.

Consider storing config in tools.metadata (e.g., API endpoint, parameters) to power future interactive tools.

7.9 Storefront Pages
	•	/shop – maybe list featured collections + featured products.
	•	/shop/collections – list all collections via Shopify.
	•	/shop/collections/[handle] – fetch collection by handle + products.
	•	/shop/products/[handle] – fetch product and use ProductDetail component.

Use modular components:
	•	ProductCard for grid (thumbnail, title, price).
	•	ProductDetail for hero (image gallery, title, price, description, variant picker).