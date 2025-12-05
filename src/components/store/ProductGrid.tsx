import type { ShopifyProduct } from "@/lib/types";
import { ProductCard } from "@/components/store/ProductCard";
import { Section } from "@/components/ui/Section";

interface ProductGridProps {
  products: ShopifyProduct[];
  variant?: "default" | "carousel";
}

export function ProductGrid({ products, variant = "default" }: ProductGridProps) {
  if (!products.length) return null;

  return (
    <Section>
      <div className={variant === "carousel" ? "grid gap-6 md:grid-cols-4" : "grid gap-6 md:grid-cols-3"}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
