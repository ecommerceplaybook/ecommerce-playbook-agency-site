import { NextResponse } from "next/server";
import { createScan } from "@/lib/supabase/queries/scans";
import { normalizeUrl, validateUrl } from "@/lib/cro-checker/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Normalize and validate URL
    let normalizedUrl: string;
    try {
      normalizedUrl = normalizeUrl(url);
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "Invalid URL format" },
        { status: 400 },
      );
    }

    if (!validateUrl(normalizedUrl)) {
      return NextResponse.json({ error: "Invalid URL protocol" }, { status: 400 });
    }

    // Create scan record
    const scan = await createScan(normalizedUrl);

    // Trigger background processing (non-blocking)
    // In production, you might want to use a queue system
    // For MVP, we'll trigger it via a separate API call
    const baseUrl = request.url.replace("/api/cro-checker/scan", "");
    fetch(`${baseUrl}/api/cro-checker/scan/${scan.id}/process`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      console.error("Failed to trigger scan processing:", error);
      // Don't fail the request if background job trigger fails
    });

    return NextResponse.json({ scan });
  } catch (error) {
    console.error("Scan creation error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create scan" },
      { status: 500 },
    );
  }
}
