import { shopifyFetch } from "./client";
import type { ShopifyCollection, ShopifyProduct, ShopifyImage, ShopifyVariant } from "@/lib/types";

type Edge<T> = { node: T };

interface CollectionProductNode extends Omit<ShopifyProduct, "images" | "variants"> {
  images: { edges: Edge<ShopifyImage>[] };
  variants: { edges: Edge<ShopifyVariant>[] };
}

const COLLECTION_FIELDS = `
  id
  handle
  title
  descriptionHtml
  image { id url altText width height }
`;

export async function getCollections(limit = 20): Promise<ShopifyCollection[]> {
  const query = `
    query Collections($limit: Int!) {
      collections(first: $limit) {
        edges {
          node {
            ${COLLECTION_FIELDS}
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{ collections: { edges: { node: ShopifyCollection }[] } }>(
    query,
    { limit },
  );
  return data.collections.edges.map(({ node }) => node);
}

export async function getCollectionByHandle(handle: string): Promise<{
  collection: ShopifyCollection | null;
  products: ShopifyProduct[];
}> {
  const query = `
    query CollectionByHandle($handle: String!) {
      collectionByHandle(handle: $handle) {
        ${COLLECTION_FIELDS}
        products(first: 20) {
          edges {
            node {
              id
              handle
              title
              descriptionHtml
              tags
              featuredImage { id url altText width height }
              images(first: 6) { edges { node { id url altText width height } } }
              variants(first: 1) {
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
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    collectionByHandle: (ShopifyCollection & { products: { edges: Edge<CollectionProductNode>[] } }) | null;
  }>(query, { handle });
  if (!data.collectionByHandle) {
    return { collection: null, products: [] };
  }

  const { products, ...collection } = data.collectionByHandle;
  return {
    collection,
    products: products.edges.map(({ node }) => ({
      ...node,
      images: node.images.edges.map((edge) => edge.node),
      variants: node.variants.edges.map((edge) => edge.node),
    })),
  };
}
