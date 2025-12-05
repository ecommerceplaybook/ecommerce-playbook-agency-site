import { NextResponse } from "next/server";
import { getToolBySlug } from "@/lib/supabase/queries/tools";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, { params }: Params) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);
  if (!tool) {
    return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.json(tool);
}
