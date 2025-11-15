3.1 CMS Types (Supabase)

// src/lib/types/cms.ts

export type PageSlug =
  | "home"
  | "about"
  | "faq"
  | "contact"
  | "case-studies"
  | "blog"
  | "tools";

export interface BaseEntity {
  id: string;
  created_at: string;
  updated_at: string | null;
}

export interface Page extends BaseEntity {
  slug: PageSlug;
  title: string;
  seo_title: string | null;
  seo_description: string | null;
  hero_heading: string | null;
  hero_subheading: string | null;
  body: string | null; // markdown or rich text JSON
}

export interface BlogPost extends BaseEntity {
  slug: string;
  title: string;
  excerpt: string;
  body: string;           // markdown or rich text JSON
  published_at: string;
  featured: boolean;
  tags: string[] | null;
  reading_time_minutes: number | null;
}

export interface CaseStudy extends BaseEntity {
  slug: string;
  title: string;
  client_name: string;
  summary: string;
  industry: string;
  before_metric_label: string | null;
  before_metric_value: string | null;
  after_metric_label: string | null;
  after_metric_value: string | null;
  body: string;
  featured: boolean;
}

export interface FAQItem extends BaseEntity {
  question: string;
  answer: string;        // markdown / rich text
  category: string | null;
  sort_order: number;
}

export interface Tool extends BaseEntity {
  slug: string;
  name: string;
  short_description: string;
  long_description: string;
  category: string | null;
  link_url: string | null;
  is_external: boolean;
  metadata: Record<string, any> | null;
}

3.2 Shopify Types

// src/lib/types/shopify.ts

export interface ShopifyImage {
  id: string;
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface ShopifyPrice {
  amount: string;
  currencyCode: string;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  sku: string | null;
  availableForSale: boolean;
  price: ShopifyPrice;
  compareAtPrice?: ShopifyPrice | null;
}

export interface ShopifyProduct {
  id: string;
  handle: string;
  title: string;
  descriptionHtml: string;
  featuredImage: ShopifyImage | null;
  images: ShopifyImage[];
  variants: ShopifyVariant[];
  tags: string[];
}

export interface ShopifyCollection {
  id: string;
  handle: string;
  title: string;
  descriptionHtml: string;
  image: ShopifyImage | null;
}