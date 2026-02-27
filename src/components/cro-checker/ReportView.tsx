"use client";

import { useState } from "react";
import type { ScanWithResults } from "@/lib/types/cro-checker";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { RuleCard } from "./RuleCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ReportViewProps {
  scan: ScanWithResults;
}

export function ReportView({ scan }: ReportViewProps) {
  const [copied, setCopied] = useState(false);

  const copyReportLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const croScore = scan.scores.cro || 0;
  const performanceScore = scan.scores.performance || 0;
  const overallScore = scan.scores.overall || 0;

  const screenshot = scan.artifacts.find((a) => a.type === "screenshot");

  // Group results by category
  const resultsByCategory = scan.results.reduce(
    (acc, result) => {
      if (!acc[result.category]) {
        acc[result.category] = [];
      }
      acc[result.category].push(result);
      return acc;
    },
    {} as Record<string, typeof scan.results>,
  );

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <>
      <Section>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <PageHeader
              eyebrow="CRO & Performance Report"
              title={scan.url}
              description={`Scanned on ${new Date(scan.created_at).toLocaleDateString()} at ${new Date(scan.created_at).toLocaleTimeString()}`}
            />
          </div>
          <Button onClick={copyReportLink} variant="secondary" size="md">
            {copied ? "Copied!" : "Copy Report Link"}
          </Button>
        </div>

        {/* Overall Score */}
        <div className="mb-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-slate-500">Overall Score</p>
              <p className={`mt-2 text-5xl font-bold ${getScoreColor(overallScore)}`}>{overallScore}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase text-slate-500">CRO</p>
                <p className={`mt-1 text-2xl font-bold ${getScoreColor(croScore)}`}>{croScore}</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold uppercase text-slate-500">Performance</p>
                <p className={`mt-1 text-2xl font-bold ${getScoreColor(performanceScore)}`}>{performanceScore}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot */}
        {screenshot && (
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold">Page Screenshot</h3>
            <img src={screenshot.url} alt="Page screenshot" className="w-full rounded-lg border border-slate-200" />
          </div>
        )}
      </Section>

      {/* CRO Results by Category */}
      <Section background="muted">
        <h2 className="mb-6 text-2xl font-semibold">CRO Checklist</h2>
        <div className="space-y-6">
          {Object.entries(resultsByCategory).map(([category, results]) => (
            <div key={category}>
              <h3 className="mb-4 text-lg font-semibold capitalize">{category}</h3>
              <div className="space-y-4">
                {results.map((result) => (
                  <RuleCard key={result.id} result={result} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
