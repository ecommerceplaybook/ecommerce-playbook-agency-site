export type ScanStatus = "queued" | "processing" | "completed" | "failed";
export type Impact = "low" | "medium" | "high";
export type Effort = "quick" | "moderate" | "extensive";
export type RuleCategory = "messaging" | "cta" | "trust" | "content" | "design" | "technical";
export type ArtifactType = "screenshot" | "metrics";

export interface Scan {
  id: string;
  url: string;
  status: ScanStatus;
  current_step: string | null;
  scores: {
    cro?: number;
    performance?: number;
    overall?: number;
  };
  error_message: string | null;
  created_at: string;
  completed_at: string | null;
}

export interface ScanResult {
  id: string;
  scan_id: string;
  rule_id: string;
  category: RuleCategory;
  passed: boolean;
  impact: Impact;
  effort: Effort;
  evidence: Record<string, unknown>;
  recommendation: string | null;
  created_at: string;
}

export interface ScanArtifact {
  id: string;
  scan_id: string;
  type: ArtifactType;
  url: string;
  metadata: Record<string, unknown>;
  created_at: string;
}

export interface ContentSignals {
  pageTitle: string | null;
  metaDescription: string | null;
  h1: string | null;
  h2s: string[];
  h3s: string[];
  heroText: string | null;
  ctaButtons: Array<{
    text: string;
    href: string | null;
    aboveFold: boolean;
  }>;
  navigationLinks: string[];
  footerLinks: string[];
}

export interface TrustSignals {
  phoneNumber: boolean;
  physicalAddress: boolean;
  emailAddress: boolean;
  privacyPolicy: boolean;
  termsConditions: boolean;
  returnsRefunds: boolean;
  trustBadges: boolean;
  testimonials: boolean;
}

export interface DesignSignals {
  fontFamilies: string[];
  colorPalette: string[];
  ctaContrast: number | null;
  imageCount: number;
  imagesWithDimensions: number;
  aboveFoldDensity: number;
}

export interface TechnicalSignals {
  scriptCount: number;
  cssCount: number;
  hasSchemaMarkup: boolean;
  schemaTypes: string[];
  platform: string | null;
}

export interface Signals {
  content: ContentSignals;
  trust: TrustSignals;
  design: DesignSignals;
  technical: TechnicalSignals;
}

export interface RuleDefinition {
  id: string;
  category: RuleCategory;
  title: string;
  impact: Impact;
  effort: Effort;
  check: (signals: Signals) => { passed: boolean; evidence: Record<string, unknown> };
  recommendation: string;
}

export interface RuleResult {
  ruleId: string;
  category: RuleCategory;
  passed: boolean;
  impact: Impact;
  effort: Effort;
  evidence: Record<string, unknown>;
  recommendation: string;
}

export interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint (ms)
  lcp: number | null; // Largest Contentful Paint (ms)
  tbt: number | null; // Total Blocking Time (ms)
  cls: number | null; // Cumulative Layout Shift
  speedIndex: number | null;
  tti: number | null; // Time to Interactive (ms)
  score: number; // Normalized score 0-100
}

export interface ScanWithResults extends Scan {
  results: ScanResult[];
  artifacts: ScanArtifact[];
}
