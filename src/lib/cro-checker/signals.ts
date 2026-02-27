import type { ContentSignals, DesignSignals, Signals, TechnicalSignals, TrustSignals } from "@/lib/types/cro-checker";

/**
 * Extract content signals from HTML
 */
export function extractContentSignals(html: string, url: string): ContentSignals {
  // Create a temporary DOM parser (works in Node.js with jsdom-like libraries or browser)
  // For server-side, we'll use regex-based extraction
  const pageTitle = extractMetaTag(html, "title") || extractMetaTag(html, "og:title") || null;
  const metaDescription =
    extractMetaTag(html, "description") || extractMetaTag(html, "og:description") || null;

  const h1 = extractFirstTag(html, "h1");
  const h2s = extractAllTags(html, "h2");
  const h3s = extractAllTags(html, "h3");

  // Extract hero section text (first large text block)
  const heroText = extractHeroText(html);

  // Extract CTA buttons
  const ctaButtons = extractCTAButtons(html, url);

  // Extract navigation links
  const navigationLinks = extractNavigationLinks(html);

  // Extract footer links
  const footerLinks = extractFooterLinks(html);

  return {
    pageTitle,
    metaDescription,
    h1,
    h2s,
    h3s,
    heroText,
    ctaButtons,
    navigationLinks,
    footerLinks,
  };
}

/**
 * Extract trust signals from HTML
 */
export function extractTrustSignals(html: string): TrustSignals {
  const phoneRegex = /(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const addressRegex = /\d+\s+[A-Za-z0-9\s,]+(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Lane|Ln|Drive|Dr|Court|Ct|Place|Pl)[\s,]+[A-Za-z\s,]+(?:[A-Z]{2})?\s+\d{5}/i;

  const phoneNumber = phoneRegex.test(html);
  const physicalAddress = addressRegex.test(html);
  const emailAddress = emailRegex.test(html);

  const privacyPolicy =
    /privacy[\s-]?policy|privacy[\s-]?notice/i.test(html) ||
    /href=["'][^"']*privacy/i.test(html);
  const termsConditions =
    /terms[\s-]?of[\s-]?service|terms[\s-]?and[\s-]?conditions|terms[\s-]?of[\s-]?use/i.test(html) ||
    /href=["'][^"']*terms/i.test(html);
  const returnsRefunds =
    /return[\s-]?policy|refund[\s-]?policy|shipping[\s-]?policy/i.test(html) ||
    /href=["'][^"']*return/i.test(html);

  const trustBadges =
    /trusted|secure|guaranteed|certified|verified|badge/i.test(html) ||
    /class=["'][^"']*badge/i.test(html);

  const testimonials =
    /testimonial|review|rating|customer[\s-]?review/i.test(html) ||
    /class=["'][^"']*testimonial/i.test(html) ||
    /class=["'][^"']*review/i.test(html);

  return {
    phoneNumber,
    physicalAddress,
    emailAddress,
    privacyPolicy,
    termsConditions,
    returnsRefunds,
    trustBadges,
    testimonials,
  };
}

/**
 * Extract design signals from HTML
 */
export function extractDesignSignals(html: string): DesignSignals {
  // Extract font families from style tags and inline styles
  const fontFamilies = extractFontFamilies(html);

  // Extract color palette from CSS
  const colorPalette = extractColorPalette(html);

  // Count images
  const imageMatches = html.match(/<img[^>]*>/gi) || [];
  const imageCount = imageMatches.length;
  const imagesWithDimensions = imageMatches.filter((img) => {
    return /(width|height)=["']\d+["']/i.test(img) || /style=["'][^"']*(width|height)[:"']/i.test(img);
  }).length;

  // Calculate CTA contrast (simplified - would need actual computed styles)
  const ctaContrast = null; // Would require browser rendering

  // Estimate above-fold density (simplified)
  const aboveFoldDensity = estimateAboveFoldDensity(html);

  return {
    fontFamilies,
    colorPalette,
    ctaContrast,
    imageCount,
    imagesWithDimensions,
    aboveFoldDensity,
  };
}

/**
 * Extract technical signals from HTML
 */
export function extractTechnicalSignals(html: string): TechnicalSignals {
  const scriptMatches = html.match(/<script[^>]*>/gi) || [];
  const scriptCount = scriptMatches.length;

  const cssMatches = html.match(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi) || [];
  const cssCount = cssMatches.length;

  const hasSchemaMarkup = /<script[^>]*type=["']application\/ld\+json["'][^>]*>/i.test(html);
  const schemaTypes: string[] = [];

  if (hasSchemaMarkup) {
    const schemaMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
    for (const match of schemaMatches) {
      try {
        const jsonMatch = match.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
        if (jsonMatch) {
          const schema = JSON.parse(jsonMatch[1]);
          if (schema["@type"]) {
            schemaTypes.push(schema["@type"]);
          }
        }
      } catch {
        // Skip invalid JSON
      }
    }
  }

  // Platform detection
  const platform = detectPlatform(html);

  return {
    scriptCount,
    cssCount,
    hasSchemaMarkup,
    schemaTypes,
    platform,
  };
}

/**
 * Extract all signals from HTML
 */
export function extractSignals(html: string, url: string): Signals {
  return {
    content: extractContentSignals(html, url),
    trust: extractTrustSignals(html),
    design: extractDesignSignals(html),
    technical: extractTechnicalSignals(html),
  };
}

// Helper functions

function extractMetaTag(html: string, name: string): string | null {
  const patterns = [
    new RegExp(`<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']+)["']`, "i"),
    new RegExp(`<meta[^>]*property=["']og:${name}["'][^>]*content=["']([^"']+)["']`, "i"),
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      return match[1].trim();
    }
  }

  return null;
}

function extractFirstTag(html: string, tag: string): string | null {
  const pattern = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = html.match(pattern);
  if (match && match[1]) {
    return stripHtmlTags(match[1]).trim();
  }
  return null;
}

function extractAllTags(html: string, tag: string): string[] {
  const pattern = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
  const matches = html.matchAll(pattern);
  const results: string[] = [];
  for (const match of matches) {
    if (match[1]) {
      results.push(stripHtmlTags(match[1]).trim());
    }
  }
  return results;
}

function extractHeroText(html: string): string | null {
  // Look for common hero section patterns
  const heroPatterns = [
    /<section[^>]*class=["'][^"']*hero["'][^>]*>([\s\S]{0,500})<\/section>/i,
    /<div[^>]*class=["'][^"']*hero["'][^>]*>([\s\S]{0,500})<\/div>/i,
    /<header[^>]*>([\s\S]{0,500})<\/header>/i,
  ];

  for (const pattern of heroPatterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      const text = stripHtmlTags(match[1]).trim();
      if (text.length > 20) {
        return text.substring(0, 200);
      }
    }
  }

  return null;
}

function extractCTAButtons(html: string, baseUrl: string): Array<{ text: string; href: string | null; aboveFold: boolean }> {
  const buttons: Array<{ text: string; href: string | null; aboveFold: boolean }> = [];

  // Find button elements
  const buttonPattern = /<(button|a)[^>]*class=["'][^"']*(?:btn|button|cta)[^"']*["'][^>]*>([\s\S]*?)<\/(button|a)>/gi;
  const matches = html.matchAll(buttonPattern);

  let position = 0;
  for (const match of matches) {
    const fullMatch = match[0];
    const text = stripHtmlTags(match[2]).trim();
    const hrefMatch = fullMatch.match(/href=["']([^"']+)["']/i);
    const href = hrefMatch ? hrefMatch[1] : null;

    // Estimate if above fold (first 5000 chars)
    const aboveFold = position < 5000;

    if (text.length > 0) {
      buttons.push({ text, href, aboveFold });
    }

    position += fullMatch.length;
  }

  return buttons.slice(0, 10); // Limit to first 10 CTAs
}

function extractNavigationLinks(html: string): string[] {
  const navPattern = /<nav[^>]*>([\s\S]*?)<\/nav>/i;
  const navMatch = html.match(navPattern);
  if (!navMatch) return [];

  const linkPattern = /<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  const matches = navMatch[1].matchAll(linkPattern);
  const links: string[] = [];

  for (const match of matches) {
    const text = stripHtmlTags(match[2]).trim();
    if (text.length > 0) {
      links.push(text);
    }
  }

  return links.slice(0, 20);
}

function extractFooterLinks(html: string): string[] {
  const footerPattern = /<footer[^>]*>([\s\S]*?)<\/footer>/i;
  const footerMatch = html.match(footerPattern);
  if (!footerMatch) return [];

  const linkPattern = /<a[^>]*href=["'][^"']+["'][^>]*>([\s\S]*?)<\/a>/gi;
  const matches = footerMatch[1].matchAll(linkPattern);
  const links: string[] = [];

  for (const match of matches) {
    const text = stripHtmlTags(match[1]).trim();
    if (text.length > 0 && text.length < 50) {
      links.push(text);
    }
  }

  return links.slice(0, 30);
}

function extractFontFamilies(html: string): string[] {
  const fonts = new Set<string>();

  // Extract from style tags
  const stylePattern = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  const styleMatches = html.matchAll(stylePattern);
  for (const match of styleMatches) {
    const fontMatches = match[1].match(/font-family:\s*([^;]+)/gi) || [];
    for (const fontMatch of fontMatches) {
      const font = fontMatch.replace(/font-family:\s*/i, "").trim();
      fonts.add(font.split(",")[0].replace(/["']/g, "").trim());
    }
  }

  // Extract from inline styles
  const inlineFontMatches = html.match(/style=["'][^"']*font-family[^"']*["']/gi) || [];
  for (const match of inlineFontMatches) {
    const fontMatch = match.match(/font-family:\s*([^;"']+)/i);
    if (fontMatch) {
      fonts.add(fontMatch[1].split(",")[0].replace(/["']/g, "").trim());
    }
  }

  return Array.from(fonts).slice(0, 10);
}

function extractColorPalette(html: string): string[] {
  const colors = new Set<string>();

  // Extract hex colors
  const hexMatches = html.match(/#[0-9a-f]{6}|#[0-9a-f]{3}/gi) || [];
  for (const color of hexMatches) {
    colors.add(color.toLowerCase());
  }

  // Extract rgb/rgba colors
  const rgbMatches = html.match(/rgba?\([^)]+\)/gi) || [];
  for (const color of rgbMatches) {
    colors.add(color);
  }

  return Array.from(colors).slice(0, 20);
}

function estimateAboveFoldDensity(html: string): number {
  // Estimate content density in first 5000 characters
  const aboveFold = html.substring(0, 5000);
  const textLength = stripHtmlTags(aboveFold).length;
  const totalLength = aboveFold.length;
  return totalLength > 0 ? Math.min(100, Math.round((textLength / totalLength) * 100)) : 0;
}

function detectPlatform(html: string): string | null {
  if (/shopify/i.test(html) || /cdn\.shopify\.com/i.test(html)) return "Shopify";
  if (/woocommerce/i.test(html) || /wp-content/i.test(html)) return "WooCommerce";
  if (/webflow/i.test(html) || /webflow\.io/i.test(html)) return "Webflow";
  if (/squarespace/i.test(html)) return "Squarespace";
  if (/bigcommerce/i.test(html)) return "BigCommerce";
  if (/magento/i.test(html)) return "Magento";
  return null;
}

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}
