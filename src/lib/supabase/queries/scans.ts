import { supabase } from "../client";
import type { Scan, ScanResult, ScanArtifact, ScanStatus, ScanWithResults, RuleResult } from "@/lib/types/cro-checker";

/**
 * Create a new scan record
 */
export async function createScan(url: string): Promise<Scan> {
  if (!supabase) {
    throw new Error("Supabase client not configured");
  }

  const { data, error } = await supabase
    .from("scans")
    .insert({
      url,
      status: "queued" as ScanStatus,
      scores: {},
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create scan: ${error.message}`);
  }

  return data as Scan;
}

/**
 * Get a scan by ID
 */
export async function getScan(id: string): Promise<Scan | null> {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase.from("scans").select("*").eq("id", id).maybeSingle();

  if (error) {
    throw new Error(`Failed to get scan: ${error.message}`);
  }

  return data as Scan | null;
}

/**
 * Get a scan with all results and artifacts
 */
export async function getScanWithResults(id: string): Promise<ScanWithResults | null> {
  if (!supabase) {
    return null;
  }

  const { data: scan, error: scanError } = await supabase
    .from("scans")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (scanError) {
    throw new Error(`Failed to get scan: ${scanError.message}`);
  }

  if (!scan) {
    return null;
  }

  const { data: results, error: resultsError } = await supabase
    .from("scan_results")
    .select("*")
    .eq("scan_id", id)
    .order("category", { ascending: true });

  if (resultsError) {
    throw new Error(`Failed to get scan results: ${resultsError.message}`);
  }

  const { data: artifacts, error: artifactsError } = await supabase
    .from("scan_artifacts")
    .select("*")
    .eq("scan_id", id)
    .order("created_at", { ascending: true });

  if (artifactsError) {
    throw new Error(`Failed to get scan artifacts: ${artifactsError.message}`);
  }

  return {
    ...(scan as Scan),
    results: (results || []) as ScanResult[],
    artifacts: (artifacts || []) as ScanArtifact[],
  };
}

/**
 * Update scan status
 */
export async function updateScanStatus(
  id: string,
  status: ScanStatus,
  currentStep?: string | null,
  errorMessage?: string | null,
): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase client not configured");
  }

  const updateData: {
    status: ScanStatus;
    current_step?: string | null;
    error_message?: string | null;
    completed_at?: string;
  } = {
    status,
  };

  if (currentStep !== undefined) {
    updateData.current_step = currentStep;
  }

  if (errorMessage !== undefined) {
    updateData.error_message = errorMessage;
  }

  if (status === "completed" || status === "failed") {
    updateData.completed_at = new Date().toISOString();
  }

  const { error } = await supabase.from("scans").update(updateData).eq("id", id);

  if (error) {
    throw new Error(`Failed to update scan status: ${error.message}`);
  }
}

/**
 * Update scan scores
 */
export async function updateScanScores(
  id: string,
  scores: { cro?: number; performance?: number; overall?: number },
): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase client not configured");
  }

  const { error } = await supabase.from("scans").update({ scores }).eq("id", id);

  if (error) {
    throw new Error(`Failed to update scan scores: ${error.message}`);
  }
}

/**
 * Save rule results for a scan
 */
export async function saveRuleResults(scanId: string, results: RuleResult[]): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase client not configured");
  }

  const records = results.map((result) => ({
    scan_id: scanId,
    rule_id: result.ruleId,
    category: result.category,
    passed: result.passed,
    impact: result.impact,
    effort: result.effort,
    evidence: result.evidence,
    recommendation: result.recommendation,
  }));

  const { error } = await supabase.from("scan_results").insert(records);

  if (error) {
    throw new Error(`Failed to save rule results: ${error.message}`);
  }
}

/**
 * Save artifacts for a scan
 */
export async function saveArtifacts(scanId: string, artifacts: Omit<ScanArtifact, "id" | "created_at">[]): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase client not configured");
  }

  const records = artifacts.map((artifact) => ({
    scan_id: scanId,
    type: artifact.type,
    url: artifact.url,
    metadata: artifact.metadata,
  }));

  const { error } = await supabase.from("scan_artifacts").insert(records);

  if (error) {
    throw new Error(`Failed to save artifacts: ${error.message}`);
  }
}
