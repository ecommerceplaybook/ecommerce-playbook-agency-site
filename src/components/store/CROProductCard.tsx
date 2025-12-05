"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { AddToCartButton } from "@/components/store/AddToCartButton";
import { Price } from "@/components/store/Price";
import type { ShopifyPrice } from "@/lib/types";

interface CROProductCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  price?: ShopifyPrice;
  handle: string;
  variantId?: string;
}

export function CROProductCard({
  title,
  description,
  imageUrl = "/product-page.png",
  imageAlt,
  price,
  handle,
  variantId,
}: CROProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden !p-4 !rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image with Quick Preview Overlay */}
      <Link href={`/shop/products/${handle}`} className="block">
        <div className="relative mb-4 overflow-hidden rounded-lg bg-slate-100 aspect-square">
          <Image
            src={imageUrl}
            alt={imageAlt ?? title}
            fill
            className={`object-cover transition-transform duration-300 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Quick Preview Overlay */}
          <div
            className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-white font-semibold text-lg">Quick View</span>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Service</p>
        
        <h3 className="text-xl font-semibold text-slate-900">
          <Link 
            href={`/shop/products/${handle}`}
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            {title}
          </Link>
        </h3>

        {/* Description Preview */}
        <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed">
          {description}
        </p>

        {/* Price */}
        {price && (
          <div className="pt-2">
            <Price price={price} />
          </div>
        )}

        {/* Add to Cart Button */}
        <div className="pt-2">
          <AddToCartButton productHandle={handle} variantId={variantId} />
        </div>
      </div>
    </Card>
  );
}

