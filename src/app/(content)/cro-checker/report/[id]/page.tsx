"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { ScanWithResults } from "@/lib/types/cro-checker";
import { Section } from "@/components/ui/Section";
import { ScanProgress } from "@/components/cro-checker/ScanProgress";
import { ReportView } from "@/components/cro-checker/ReportView";

export default function ReportPage() {
  const params = useParams();
  const scanId = params.id as string;
  const [scan, setScan] = useState<ScanWithResults | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Initial fetch
    fetchScan();
  }, [scanId]);

  const fetchScan = async () => {
    try {
      const response = await fetch(`/api/cro-checker/scan/${scanId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch scan");
      }

      const data = await response.json();
      const fetchedScan: ScanWithResults = data.scan;

      setScan(fetchedScan);
      setLoading(false);

      // If scan is completed, we're done
      if (fetchedScan.status === "completed") {
        return;
      }

      // If scan failed, show error
      if (fetchedScan.status === "failed") {
        setError(fetchedScan.error_message || "Scan failed");
        setLoading(false);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load scan");
      setLoading(false);
    }
  };

  const handleComplete = async (completedScan: { id: string }) => {
    // Fetch full scan with results
    const response = await fetch(`/api/cro-checker/scan/${completedScan.id}`);
    if (response.ok) {
      const data = await response.json();
      setScan(data.scan);
    }
    setLoading(false);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setLoading(false);
  };

  if (loading || (scan && scan.status !== "completed" && scan.status !== "failed")) {
    return (
      <Section>
        <div className="flex min-h-[400px] items-center justify-center">
          {scan ? (
            <ScanProgress scanId={scanId} onComplete={handleComplete} onError={handleError} />
          ) : (
            <div className="text-center">
              <p className="text-lg">Loading scan...</p>
            </div>
          )}
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section>
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-semibold text-red-600">Scan Failed</h2>
          <p className="text-slate-600">{error}</p>
        </div>
      </Section>
    );
  }

  if (!scan || scan.status !== "completed") {
    return (
      <Section>
        <div className="text-center">
          <p className="text-lg">Scan not found</p>
        </div>
      </Section>
    );
  }

  return <ReportView scan={scan} />;
}
