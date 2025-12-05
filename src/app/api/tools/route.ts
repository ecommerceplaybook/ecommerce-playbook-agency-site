import { NextResponse } from "next/server";
import { getTools } from "@/lib/supabase/queries/tools";

export async function GET() {
  const tools = await getTools();
  return NextResponse.json({ tools });
}
