import { CROProductCard } from "./CROProductCard";

/**
 * Example usage of CROProductCard component
 * 
 * This demonstrates how to use the CROProductCard with the Conversion Rate Optimization service
 */
export function CROProductCardExample() {
  return (
    <div className="max-w-md mx-auto">
      <CROProductCard
        title="Conversion Rate Optimization (CRO)"
        description="Identify and fix the leaks in your funnel across homepage, collection pages, product pages, cart, and checkout."
        imageUrl="/product-page.png"
        imageAlt="CRO Service - Conversion Rate Optimization"
        price={{
          amount: "5000.00",
          currencyCode: "USD",
        }}
        handle="conversion-rate-optimization-cro"
        variantId="cro-service-variant-1"
      />
    </div>
  );
}


