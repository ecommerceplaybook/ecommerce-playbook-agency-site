import { NextResponse } from "next/server";
import { getCollections } from "@/lib/shopify/collections";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit") ?? "20");
  const collections = await getCollections(limit);
  return NextResponse.json({ collections });
}
