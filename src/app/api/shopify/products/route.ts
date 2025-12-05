import { NextResponse } from "next/server";
import { getProducts } from "@/lib/shopify/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit") ?? "12");
  const products = await getProducts(limit);
  return NextResponse.json({ products });
}
