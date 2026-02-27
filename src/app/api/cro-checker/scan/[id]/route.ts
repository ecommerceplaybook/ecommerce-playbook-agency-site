import { NextResponse } from "next/server";
import { getScanWithResults } from "@/lib/supabase/queries/scans";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const scan = await getScanWithResults(id);

    if (!scan) {
      return NextResponse.json({ error: "Scan not found" }, { status: 404 });
    }

    return NextResponse.json({ scan });
  } catch (error) {
    console.error("Get scan error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to get scan" },
      { status: 500 },
    );
  }
}
