"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface AddToCartButtonProps {
  productHandle: string;
  variantId?: string;
}

export function AddToCartButton({ productHandle, variantId }: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    // TODO: integrate Shopify Cart API. For now we log the intent so teams can wire it up later.
    console.info("Add to cart clicked", { productHandle, variantId });
    setLoading(false);
  };

  return (
    <Button 
      onClick={handleClick} 
      disabled={loading} 
      className="w-full bg-[var(--color-accent)] hover:bg-emerald-600 text-white" 
      size="lg"
    >
      {loading ? "Loading..." : variantId ? "Select Options" : "Add to Cart"}
    </Button>
  );
}
