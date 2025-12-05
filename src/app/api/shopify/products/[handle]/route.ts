import { NextResponse } from "next/server";
import { getProductByHandle } from "@/lib/shopify/products";

interface Params {
  params: { handle: string };
}

export async function GET(_request: Request, { params }: Params) {
  const product = await getProductByHandle(params.handle);
  if (!product) {
    return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.json(product);
}
