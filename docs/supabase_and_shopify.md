5. lib Layer: Supabase & Shopify

5.1 Supabase Client

// src/lib/supabase/client.ts
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

5.2 Supabase Query Modules

Example: blog queries.

// src/lib/supabase/queries/blog.ts
import { supabase } from "../client";
import { BlogPost } from "@/lib/types/cms";

export async function getBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("published_at", { ascending: false });

  if (error) throw error;
  return data as BlogPost[];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return data as BlogPost | null;
}

Create similar modules for:
	•	pages.ts – getPageBySlug(slug: PageSlug)
	•	caseStudies.ts – getCaseStudies(), getCaseStudyBySlug(slug)
	•	faq.ts – getFAQItems()
	•	tools.ts – getTools(), getToolBySlug(slug)

5.3 Shopify Client

// src/lib/shopify/client.ts
const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN!;
const SHOPIFY_STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN!;
const SHOPIFY_API_VERSION = "2024-01"; // or latest supported

export async function shopifyFetch<T>(query: string, variables?: Record<string, any>): Promise<T> {
  const res = await fetch(
    `https://${SHOPIFY_STORE_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 }, // ISR
    }
  );

  if (!res.ok) {
    throw new Error(`Shopify fetch failed: ${res.statusText}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(JSON.stringify(json.errors));
  }

  return json.data;
}

Example wrapper for products:

// src/lib/shopify/products.ts
import { shopifyFetch } from "./client";
import { ShopifyProduct } from "@/lib/types/shopify";

const PRODUCT_FIELDS = `
  id
  handle
  title
  descriptionHtml
  tags
  featuredImage { id url altText width height }
  images(first: 10) { edges { node { id url altText width height } } }
  variants(first: 20) {
    edges {
      node {
        id
        title
        sku
        availableForSale
        price { amount currencyCode }
        compareAtPrice { amount currencyCode }
      }
    }
  }
`;

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const query = `
    query ProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        ${PRODUCT_FIELDS}
      }
    }
  `;

  const data = await shopifyFetch<{ productByHandle: any }>(query, { handle });
  if (!data.productByHandle) return null;

  const p = data.productByHandle;
  return {
    ...p,
    images: p.images.edges.map((e: any) => e.node),
    variants: p.variants.edges.map((e: any) => e.node),
  } as ShopifyProduct;
}

Create similar for getProducts, getCollections, getCollectionByHandle.

