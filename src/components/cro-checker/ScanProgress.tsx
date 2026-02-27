"use client";

import { useEffect, useState } from "react";
import type { Scan } from "@/lib/types/cro-checker";
import { SCAN_STEPS } from "@/lib/cro-checker/config";

interface ScanProgressProps {
  scanId: string;
  onComplete: (scan: { id: string }) => void;
  onError: (error: string) => void;
}

export function ScanProgress({ scanId, onComplete, onError }: ScanProgressProps) {
  const [currentStep, setCurrentStep] = useState<string | null>(null);
  const [status, setStatus] = useState<Scan["status"]>("queued");

  useEffect(() => {
    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch(`/api/cro-checker/scan/${scanId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch scan status");
        }

        const data = await response.json();
        const scan: Scan = data.scan;

        setStatus(scan.status);
        setCurrentStep(scan.current_step);

        if (scan.status === "completed") {
          clearInterval(pollInterval);
          onComplete({ id: scan.id });
        } else if (scan.status === "failed") {
          clearInterval(pollInterval);
          onError(scan.error_message || "Scan failed");
        }
      } catch (error) {
        console.error("Polling error:", error);
        // Continue polling on error
      }
    }, 2500); // Poll every 2.5 seconds

    return () => clearInterval(pollInterval);
  }, [scanId, onComplete, onError]);

  const currentStepIndex = currentStep ? SCAN_STEPS.findIndex((step) => step === currentStep) : -1;

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Analyzing your website...</h2>
        <p className="text-slate-600">This may take 30-60 seconds</p>
      </div>

      <div className="space-y-4">
        {SCAN_STEPS.map((step, index) => {
          const isActive = index === currentStepIndex;
          const isCompleted = index < currentStepIndex;
          const isPending = index > currentStepIndex;

          return (
            <div key={step} className="flex items-center gap-4">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-semibold ${
                  isCompleted
                    ? "border-green-500 bg-green-500 text-white"
                    : isActive
                      ? "border-[hsl(var(--color-brand))] bg-[hsl(var(--color-brand))] text-white"
                      : "border-slate-300 bg-white text-slate-400"
                }`}
              >
                {isCompleted ? "✓" : index + 1}
              </div>
              <div className="flex-1">
                <p
                  className={`font-medium ${
                    isActive ? "text-[hsl(var(--color-brand))]" : isCompleted ? "text-green-600" : "text-slate-400"
                  }`}
                >
                  {step}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
