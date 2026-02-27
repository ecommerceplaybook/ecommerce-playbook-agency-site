import { getPerformanceMetrics } from "./browserless";
import type { PerformanceMetrics } from "@/lib/types/cro-checker";

/**
 * Collect performance metrics for a URL
 */
export async function analyzePerformance(url: string): Promise<PerformanceMetrics> {
  try {
    const metrics = await getPerformanceMetrics(url);

    // Calculate normalized performance score (0-100)
    const score = calculatePerformanceScore(metrics);

    return {
      ...metrics,
      score,
    };
  } catch (error) {
    console.error("Performance analysis failed:", error);
    return {
      fcp: null,
      lcp: null,
      tbt: null,
      cls: null,
      speedIndex: null,
      tti: null,
      score: 0,
    };
  }
}

/**
 * Calculate normalized performance score from metrics
 * Based on Lighthouse scoring methodology
 */
function calculatePerformanceScore(metrics: Omit<PerformanceMetrics, "score">): number {
  const scores: number[] = [];

  // FCP score (0-3000ms, lower is better)
  if (metrics.fcp !== null) {
    scores.push(scoreMetric(metrics.fcp, [1800, 3000]));
  }

  // LCP score (0-4000ms, lower is better)
  if (metrics.lcp !== null) {
    scores.push(scoreMetric(metrics.lcp, [2500, 4000]));
  }

  // TBT score (0-600ms, lower is better)
  if (metrics.tbt !== null) {
    scores.push(scoreMetric(metrics.tbt, [200, 600]));
  }

  // CLS score (0-0.25, lower is better)
  if (metrics.cls !== null) {
    scores.push(scoreMetric(metrics.cls * 1000, [100, 250])); // Convert to 0-250 scale
  }

  // Speed Index score (0-5800ms, lower is better)
  if (metrics.speedIndex !== null) {
    scores.push(scoreMetric(metrics.speedIndex, [3400, 5800]));
  }

  // TTI score (0-7300ms, lower is better)
  if (metrics.tti !== null) {
    scores.push(scoreMetric(metrics.tti, [3800, 7300]));
  }

  if (scores.length === 0) {
    return 0;
  }

  // Average the scores
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  return Math.round(average);
}

/**
 * Score a single metric using Lighthouse's scoring curve
 * @param value The metric value
 * @param thresholds [good, poor] thresholds
 * @returns Score 0-100
 */
function scoreMetric(value: number, thresholds: [number, number]): number {
  const [good, poor] = thresholds;

  if (value <= good) {
    return 100;
  }

  if (value >= poor) {
    return 0;
  }

  // Linear interpolation between good and poor
  const ratio = (value - good) / (poor - good);
  return Math.round(100 * (1 - ratio));
}

/**
 * Format performance metric for display
 */
export function formatMetric(value: number | null, unit: string = "ms"): string {
  if (value === null) return "N/A";
  if (value < 1000) return `${Math.round(value)}${unit}`;
  return `${(value / 1000).toFixed(1)}s`;
}
