import { NextResponse } from "next/server";
import { getProductByHandle } from "@/lib/shopify/products";

interface Params {
  params: Promise<{ handle: string }>;
}

export async function GET(_request: Request, { params }: Params) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);
  if (!product) {
    return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.json(product);
}
