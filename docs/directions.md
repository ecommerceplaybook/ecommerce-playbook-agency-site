# eCommerce Playbook – Headless Agency + Storefront Spec

This document is written so you can paste it into Cursor and let it scaffold the project.

---

## 0. Tech Stack & Assumptions

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Deployment:** Vercel
- **Database / CMS:** Supabase (for content: pages, blog, tools, case studies, FAQs)
- **Storefront:** Headless Shopify using Storefront API
- **Styling:** Tailwind CSS (or CSS Modules – choose one and be consistent)
- **Forms & Email:** API route + provider (e.g., Resend, SendGrid) – implementation can be stubbed
- **Auth (optional/for future):** Supabase Auth (not required initially)

Architecture goal: **modular, section-based components** that can be reused across marketing pages, tools pages, blog, and store pages.

---

## 1. High-Level Architecture

### 1.1 Route Map (App Router)

Use the `/app` directory with route groups to separate marketing vs. store vs. content.

**Marketing & Content**

- `/` – Homepage
- `/about`
- `/faq`
- `/case-studies` – list of case studies
- `/case-studies/[slug]` – single case study
- `/contact`
- `/blog` – blog index
- `/blog/[slug]` – blog post detail
- `/tools` – tools index
- `/tools/[slug]` – tool detail page

**Storefront (headless Shopify)**

- `/shop` – primary collections / “all products”
- `/shop/collections` – collections index
- `/shop/collections/[handle]` – products in a collection
- `/shop/products/[handle]` – single product

**API Routes**

- `/api/contact` – handle contact form submissions
- `/api/tools` – list tools (proxy to Supabase if needed)
- `/api/tools/[slug]` – tool detail JSON
- `/api/shopify/products` – product listing proxy
- `/api/shopify/products/[handle]`
- `/api/shopify/collections`
- `/api/shopify/collections/[handle]`

---

## 2. Directory Structure

Use this as the baseline:

```txt
src/
  app/
    (marketing)/
      layout.tsx
      page.tsx                 # homepage
      about/
        page.tsx
      faq/
        page.tsx
      case-studies/
        page.tsx              # list
        [slug]/
          page.tsx            # detail
      contact/
        page.tsx
    (content)/
      blog/
        page.tsx              # index
        [slug]/
          page.tsx            # detail
      tools/
        page.tsx              # index
        [slug]/
          page.tsx            # detail
    (store)/
      shop/
        page.tsx              # default store landing (or collections index)
        collections/
          page.tsx            # collections index
          [handle]/
            page.tsx          # products by collection
        products/
          [handle]/
            page.tsx          # product detail

    api/
      contact/route.ts
      tools/route.ts
      tools/[slug]/route.ts
      shopify/
        products/route.ts
        products/[handle]/route.ts
        collections/route.ts
        collections/[handle]/route.ts

  components/
    layout/
      SiteLayout.tsx
      Header.tsx
      Footer.tsx
      MainNav.tsx
      MobileNav.tsx
    ui/
      Button.tsx
      Card.tsx
      Container.tsx
      Section.tsx
      Badge.tsx
      Input.tsx
      Textarea.tsx
      Select.tsx
      Accordion.tsx
      Pill.tsx
      Grid.tsx
      PageHeader.tsx
      Prose.tsx
    marketing/
      Hero.tsx
      LogoCloud.tsx
      ServiceGrid.tsx
      TestimonialSection.tsx
      CTASection.tsx
      FAQSection.tsx
      CaseStudyCarousel.tsx
    content/
      BlogList.tsx
      BlogPostBody.tsx
      ToolList.tsx
      ToolDetailSection.tsx
      RichTextRenderer.tsx
    store/
      ProductCard.tsx
      ProductGrid.tsx
      ProductDetail.tsx
      CollectionCard.tsx
      Price.tsx
      AddToCartButton.tsx     # stub for long-term cart integration

  lib/
    supabase/
      client.ts
      queries/
        pages.ts
        blog.ts
        tools.ts
        caseStudies.ts
        faq.ts
    shopify/
      client.ts
      products.ts
      collections.ts
    utils/
      env.ts
      slug.ts
      seo.ts
      formatting.ts
      error.ts
    types/
      cms.ts
      shopify.ts
      index.ts

  styles/
    globals.css
    tokens.css (optional)

  config/
    navigation.ts
    siteMeta.ts