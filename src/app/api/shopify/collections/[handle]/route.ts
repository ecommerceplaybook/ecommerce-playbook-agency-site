import { NextResponse } from "next/server";
import { getCollectionByHandle } from "@/lib/shopify/collections";

interface Params {
  params: { handle: string };
}

export async function GET(_request: Request, { params }: Params) {
  const { collection, products } = await getCollectionByHandle(params.handle);
  if (!collection) {
    return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.json({ collection, products });
}
