import Link from "next/link";
import type { ShopifyCollection } from "@/lib/types";
import { Card } from "@/components/ui/Card";

export function CollectionCard({ collection }: { collection: ShopifyCollection }) {
  return (
    <Card>
      {collection.image && (
        <div className="mb-4 overflow-hidden rounded-2xl bg-slate-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={collection.image.url}
            alt={collection.image.altText ?? collection.title}
            className="aspect-square w-full object-cover"
          />
        </div>
      )}
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Collection</p>
      <h3 className="mt-2 text-2xl font-semibold text-slate-900">
        <Link href={`/shop/collections/${collection.handle}`}>{collection.title}</Link>
      </h3>
      <div className="mt-3 text-sm text-slate-500" dangerouslySetInnerHTML={{ __html: collection.descriptionHtml }} />
    </Card>
  );
}
