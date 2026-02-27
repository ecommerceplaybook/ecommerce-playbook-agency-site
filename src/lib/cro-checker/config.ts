/**
 * Configuration for CRO Checker
 */

export const SCAN_STEPS = [
  "Fetching website",
  "Rendering page",
  "Capturing screenshots",
  "Running CRO checks",
  "Analyzing performance",
  "Generating recommendations",
] as const;

export const DEFAULT_TIMEOUT = 30000; // 30 seconds
export const POLLING_INTERVAL = 2500; // 2.5 seconds

/**
 * Normalize URL: add https, strip tracking params, etc.
 */
export function normalizeUrl(url: string): string {
  let normalized = url.trim();

  // Remove whitespace
  normalized = normalized.replace(/\s+/g, "");

  // Add protocol if missing
  if (!normalized.match(/^https?:\/\//i)) {
    normalized = `https://${normalized}`;
  }

  try {
    const urlObj = new URL(normalized);

    // Strip common tracking parameters
    const trackingParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "fbclid",
      "gclid",
      "ref",
      "source",
    ];

    trackingParams.forEach((param) => {
      urlObj.searchParams.delete(param);
    });

    // Normalize to lowercase hostname
    urlObj.hostname = urlObj.hostname.toLowerCase();

    return urlObj.toString();
  } catch (error) {
    throw new Error(`Invalid URL: ${url}`);
  }
}

/**
 * Validate URL format
 */
export function validateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === "http:" || urlObj.protocol === "https:";
  } catch {
    return false;
  }
}
