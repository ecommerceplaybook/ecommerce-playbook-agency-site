import { NextResponse } from "next/server";
import { getCollectionByHandle } from "@/lib/shopify/collections";

interface Params {
  params: Promise<{ handle: string }>;
}

export async function GET(_request: Request, { params }: Params) {
  const { handle } = await params;
  const { collection, products } = await getCollectionByHandle(handle);
  if (!collection) {
    return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.json({ collection, products });
}
