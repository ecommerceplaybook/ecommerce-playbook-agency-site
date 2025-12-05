import { formatCurrency } from "@/lib/utils/formatting";
import type { ShopifyPrice } from "@/lib/types";

export function Price({ price }: { price: ShopifyPrice }) {
  return <span className="text-lg font-semibold text-slate-900">{formatCurrency(price.amount, price.currencyCode)}</span>;
}
