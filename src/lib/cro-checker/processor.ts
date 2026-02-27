import { fetchPage, takeScreenshot } from "./browserless";
import { extractSignals } from "./signals";
import { evaluateRules, calculateCROScore } from "./rules";
import { analyzePerformance } from "./performance";
import { uploadScreenshot, uploadMetrics } from "@/lib/supabase/storage";
import {
  updateScanStatus,
  updateScanScores,
  saveRuleResults,
  saveArtifacts,
} from "@/lib/supabase/queries/scans";
import type { ScanStatus } from "@/lib/types/cro-checker";

const SCAN_STEPS = {
  FETCHING: "Fetching website",
  RENDERING: "Rendering page",
  CAPTURING: "Capturing screenshots",
  ANALYZING: "Running CRO checks",
  PERFORMANCE: "Analyzing performance",
  GENERATING: "Generating recommendations",
} as const;

/**
 * Process a scan: fetch page, extract signals, evaluate rules, analyze performance
 */
export async function processScan(scanId: string, url: string): Promise<void> {
  try {
    // Step 1: Fetching website
    await updateScanStatus(scanId, "processing", SCAN_STEPS.FETCHING);

    let pageContent;
    try {
      pageContent = await fetchPage(url, { timeout: 30000, waitUntil: "networkidle2" });
    } catch (error) {
      await updateScanStatus(
        scanId,
        "failed",
        null,
        `Failed to fetch website: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      return;
    }

    // Step 2: Rendering page (already done in fetchPage, but update status)
    await updateScanStatus(scanId, "processing", SCAN_STEPS.RENDERING);

    // Step 3: Capturing screenshots
    await updateScanStatus(scanId, "processing", SCAN_STEPS.CAPTURING);

    let screenshotUrl: string | null = null;
    try {
      const screenshotBuffer = await takeScreenshot(url, { fullPage: true });
      screenshotUrl = await uploadScreenshot(scanId, screenshotBuffer);
      await saveArtifacts(scanId, [
        {
          scan_id: scanId,
          type: "screenshot",
          url: screenshotUrl,
          metadata: {},
        },
      ]);
    } catch (error) {
      console.error("Screenshot capture failed:", error);
      // Continue without screenshot
    }

    // Step 4: Extract signals and run CRO checks
    await updateScanStatus(scanId, "processing", SCAN_STEPS.ANALYZING);

    let croScore = 0;
    try {
      const signals = extractSignals(pageContent.html, pageContent.url);
      const ruleResults = evaluateRules(signals);
      croScore = calculateCROScore(ruleResults);

      await saveRuleResults(scanId, ruleResults);
    } catch (error) {
      console.error("CRO analysis failed:", error);
      await updateScanStatus(
        scanId,
        "failed",
        null,
        `CRO analysis failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
      return;
    }

    // Step 5: Analyze performance
    await updateScanStatus(scanId, "processing", SCAN_STEPS.PERFORMANCE);

    let performanceScore = 0;
    let performanceMetricsUrl: string | null = null;
    try {
      const performanceMetrics = await analyzePerformance(url);
      performanceScore = performanceMetrics.score;

      performanceMetricsUrl = await uploadMetrics(scanId, performanceMetrics);
      await saveArtifacts(scanId, [
        {
          scan_id: scanId,
          type: "metrics",
          url: performanceMetricsUrl,
          metadata: performanceMetrics,
        },
      ]);
    } catch (error) {
      console.error("Performance analysis failed:", error);
      // Continue without performance metrics
    }

    // Step 6: Calculate overall score and finalize
    await updateScanStatus(scanId, "processing", SCAN_STEPS.GENERATING);

    const overallScore = Math.round((croScore * 0.7 + performanceScore * 0.3));

    await updateScanScores(scanId, {
      cro: croScore,
      performance: performanceScore,
      overall: overallScore,
    });

    // Mark as completed
    await updateScanStatus(scanId, "completed", null);
  } catch (error) {
    console.error("Scan processing failed:", error);
    await updateScanStatus(
      scanId,
      "failed",
      null,
      `Scan processing failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
    throw error;
  }
}
