import { NextResponse } from "next/server";
import { getToolBySlug } from "@/lib/supabase/queries/tools";

interface Params {
  params: { slug: string };
}

export async function GET(_request: Request, { params }: Params) {
  const tool = await getToolBySlug(params.slug);
  if (!tool) {
    return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.json(tool);
}
