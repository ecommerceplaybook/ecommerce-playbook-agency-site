import { shopifyFetch } from "./client";
import type { ShopifyProduct, ShopifyImage, ShopifyVariant } from "@/lib/types";

type Edge<T> = { node: T };

interface ShopifyProductQueryNode extends Omit<ShopifyProduct, "images" | "variants"> {
  images: { edges: Edge<ShopifyImage>[] };
  variants: { edges: Edge<ShopifyVariant>[] };
}

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

export async function getProducts(limit = 12): Promise<ShopifyProduct[]> {
  const query = `
    query Products($limit: Int!) {
      products(first: $limit) {
        edges {
          node {
            ${PRODUCT_FIELDS}
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{ products: { edges: Edge<ShopifyProductQueryNode>[] } }>(query, { limit });
  return data.products.edges.map(({ node }) => normalizeProduct(node));
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const query = `
    query ProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        ${PRODUCT_FIELDS}
      }
    }
  `;

  const data = await shopifyFetch<{ productByHandle: ShopifyProductQueryNode | null }>(query, { handle });
  if (!data.productByHandle) return null;
  return normalizeProduct(data.productByHandle);
}

function normalizeProduct(node: ShopifyProductQueryNode): ShopifyProduct {
  return {
    ...node,
    images: node.images.edges.map((edge) => edge.node),
    variants: node.variants.edges.map((edge) => edge.node),
  };
}
