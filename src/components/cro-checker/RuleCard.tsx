import type { ScanResult } from "@/lib/types/cro-checker";
import { CRO_RULES } from "@/lib/cro-checker/rules";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

interface RuleCardProps {
  result: ScanResult;
}

export function RuleCard({ result }: RuleCardProps) {
  const rule = CRO_RULES.find((r) => r.id === result.rule_id);
  const title = rule?.title || result.rule_id.replace(/-/g, " ");

  return (
    <Card className={`border-l-4 ${result.passed ? "border-l-green-500" : "border-l-red-500"}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className={`text-2xl ${result.passed ? "text-green-500" : "text-red-500"}`}>
              {result.passed ? "✓" : "✗"}
            </span>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600">{result.recommendation || "No recommendation available"}</p>
          {Object.keys(result.evidence).length > 0 && (
            <div className="mt-3 rounded bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase text-slate-500">Evidence</p>
              <pre className="mt-1 text-xs text-slate-700">
                {JSON.stringify(result.evidence, null, 2)}
              </pre>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Badge variant={result.impact === "high" ? "destructive" : result.impact === "medium" ? "default" : "secondary"}>
            {result.impact} impact
          </Badge>
          <Badge variant={result.effort === "quick" ? "default" : result.effort === "moderate" ? "secondary" : "outline"}>
            {result.effort} effort
          </Badge>
        </div>
      </div>
    </Card>
  );
}
