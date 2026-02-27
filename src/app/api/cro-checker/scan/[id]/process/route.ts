import { NextResponse } from "next/server";
import { getScan } from "@/lib/supabase/queries/scans";
import { processScan } from "@/lib/cro-checker/processor";

interface Params {
  params: Promise<{ id: string }>;
}

export async function POST(_request: Request, { params }: Params) {
  try {
    const { id } = await params;

    // Verify scan exists
    const scan = await getScan(id);
    if (!scan) {
      return NextResponse.json({ error: "Scan not found" }, { status: 404 });
    }

    // Don't process if already completed or failed
    if (scan.status === "completed" || scan.status === "failed") {
      return NextResponse.json({ message: "Scan already processed", scan });
    }

    // Process scan asynchronously (don't await)
    processScan(id, scan.url).catch((error) => {
      console.error("Scan processing error:", error);
    });

    return NextResponse.json({ message: "Scan processing started", scanId: id });
  } catch (error) {
    console.error("Process scan error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to start scan processing" },
      { status: 500 },
    );
  }
}
