import type { RuleDefinition, RuleResult, Signals } from "@/lib/types/cro-checker";

/**
 * CRO Rules for MVP
 */
export const CRO_RULES: RuleDefinition[] = [
  // Messaging & Value Proposition
  {
    id: "clear-headline",
    category: "messaging",
    title: "Clear headline explaining benefit",
    impact: "high",
    effort: "quick",
    check: (signals) => {
      const h1 = signals.content.h1;
      const passed = !!h1 && h1.length > 10 && h1.length < 100;
      return {
        passed,
        evidence: {
          h1: h1 || null,
          length: h1?.length || 0,
        },
      };
    },
    recommendation:
      "Ensure your main headline (H1) clearly communicates the primary benefit to visitors. It should be between 10-100 characters and appear above the fold.",
  },
  {
    id: "benefit-focused-headline",
    category: "messaging",
    title: "Headline emphasizes benefits over features",
    impact: "medium",
    effort: "moderate",
    check: (signals) => {
      const h1 = signals.content.h1?.toLowerCase() || "";
      const benefitWords = ["save", "get", "discover", "achieve", "improve", "transform", "unlock", "boost"];
      const featureWords = ["feature", "includes", "has", "contains", "equipped"];
      const hasBenefits = benefitWords.some((word) => h1.includes(word));
      const hasFeatures = featureWords.some((word) => h1.includes(word));
      const passed = hasBenefits || (!hasFeatures && h1.length > 0);
      return {
        passed,
        evidence: {
          h1,
          hasBenefits,
          hasFeatures,
        },
      };
    },
    recommendation:
      "Focus your headline on what visitors will gain (benefits) rather than what you offer (features). Use action-oriented language that speaks to outcomes.",
  },
  {
    id: "meta-description",
    category: "messaging",
    title: "Meta description present and optimized",
    impact: "medium",
    effort: "quick",
    check: (signals) => {
      const desc = signals.content.metaDescription;
      const passed = !!desc && desc.length >= 120 && desc.length <= 160;
      return {
        passed,
        evidence: {
          metaDescription: desc || null,
          length: desc?.length || 0,
        },
      };
    },
    recommendation:
      "Add a compelling meta description between 120-160 characters. This improves SEO and can increase click-through rates from search results.",
  },

  // Calls to Action
  {
    id: "primary-cta-exists",
    category: "cta",
    title: "Primary CTA button exists",
    impact: "high",
    effort: "quick",
    check: (signals) => {
      const ctas = signals.content.ctaButtons;
      const passed = ctas.length > 0;
      return {
        passed,
        evidence: {
          ctaCount: ctas.length,
          ctaTexts: ctas.map((c) => c.text),
        },
      };
    },
    recommendation:
      "Add a clear, prominent call-to-action button that tells visitors exactly what you want them to do next.",
  },
  {
    id: "cta-above-fold",
    category: "cta",
    title: "CTA appears above the fold",
    impact: "high",
    effort: "quick",
    check: (signals) => {
      const aboveFoldCTAs = signals.content.ctaButtons.filter((c) => c.aboveFold);
      const passed = aboveFoldCTAs.length > 0;
      return {
        passed,
        evidence: {
          aboveFoldCount: aboveFoldCTAs.length,
          totalCTAs: signals.content.ctaButtons.length,
        },
      };
    },
    recommendation:
      "Ensure at least one primary CTA is visible without scrolling. This increases the likelihood of immediate engagement.",
  },
  {
    id: "cta-visually-distinct",
    category: "cta",
    title: "CTA buttons are visually distinct",
    impact: "medium",
    effort: "moderate",
    check: (signals) => {
      // Simplified check - would need actual computed styles for accuracy
      const ctas = signals.content.ctaButtons;
      const passed = ctas.length > 0; // Assume CTAs with class="btn" or similar are styled
      return {
        passed,
        evidence: {
          ctaCount: ctas.length,
        },
      };
    },
    recommendation:
      "Make your CTA buttons stand out with contrasting colors, sufficient padding, and clear visual hierarchy. They should be immediately recognizable as clickable elements.",
  },

  // Trust & Credibility
  {
    id: "contact-info-present",
    category: "trust",
    title: "Contact information (phone or address) present",
    impact: "high",
    effort: "quick",
    check: (signals) => {
      const passed = signals.trust.phoneNumber || signals.trust.physicalAddress;
      return {
        passed,
        evidence: {
          phoneNumber: signals.trust.phoneNumber,
          physicalAddress: signals.trust.physicalAddress,
        },
      };
    },
    recommendation:
      "Display your phone number or physical address prominently. This builds trust and makes it easy for customers to reach you.",
  },
  {
    id: "policies-accessible",
    category: "trust",
    title: "Privacy policy and terms easily accessible",
    impact: "medium",
    effort: "quick",
    check: (signals) => {
      const passed = signals.trust.privacyPolicy && signals.trust.termsConditions;
      return {
        passed,
        evidence: {
          privacyPolicy: signals.trust.privacyPolicy,
          termsConditions: signals.trust.termsConditions,
        },
      };
    },
    recommendation:
      "Link to your privacy policy and terms of service in the footer. This is required for legal compliance and builds customer confidence.",
  },
  {
    id: "testimonials-present",
    category: "trust",
    title: "Testimonials or reviews visible",
    impact: "medium",
    effort: "moderate",
    check: (signals) => {
      const passed = signals.trust.testimonials;
      return {
        passed,
        evidence: {
          testimonialsFound: signals.trust.testimonials,
        },
      };
    },
    recommendation:
      "Add customer testimonials, reviews, or case studies to your homepage. Social proof significantly increases conversion rates.",
  },
  {
    id: "trust-badges",
    category: "trust",
    title: "Trust badges or guarantees displayed",
    impact: "low",
    effort: "quick",
    check: (signals) => {
      const passed = signals.trust.trustBadges;
      return {
        passed,
        evidence: {
          trustBadgesFound: signals.trust.trustBadges,
        },
      };
    },
    recommendation:
      "Display security badges, guarantees, or certifications near your CTAs. These small visual cues can reduce purchase anxiety.",
  },

  // Content & Education
  {
    id: "faq-present",
    category: "content",
    title: "FAQ section present",
    impact: "medium",
    effort: "moderate",
    check: (signals) => {
      const faqKeywords = ["faq", "frequently asked", "questions", "help"];
      const content = (signals.content.h1 + " " + signals.content.h2s.join(" ")).toLowerCase();
      const passed = faqKeywords.some((keyword) => content.includes(keyword));
      return {
        passed,
        evidence: {
          faqKeywordsFound: faqKeywords.filter((k) => content.includes(k)),
        },
      };
    },
    recommendation:
      "Add an FAQ section addressing common customer questions. This reduces support burden and helps visitors find answers quickly.",
  },
  {
    id: "scannable-headings",
    category: "content",
    title: "Content uses scannable heading structure",
    impact: "low",
    effort: "quick",
    check: (signals) => {
      const h2Count = signals.content.h2s.length;
      const passed = h2Count >= 2;
      return {
        passed,
        evidence: {
          h2Count,
          h3Count: signals.content.h3s.length,
        },
      };
    },
    recommendation:
      "Use clear H2 and H3 headings to break up content. This makes your page easier to scan and improves readability.",
  },
];

/**
 * Evaluate all rules against extracted signals
 */
export function evaluateRules(signals: Signals): RuleResult[] {
  return CRO_RULES.map((rule) => {
    const { passed, evidence } = rule.check(signals);
    return {
      ruleId: rule.id,
      category: rule.category,
      passed,
      impact: rule.impact,
      effort: rule.effort,
      evidence,
      recommendation: rule.recommendation,
    };
  });
}

/**
 * Calculate CRO score from rule results
 */
export function calculateCROScore(results: RuleResult[]): number {
  if (results.length === 0) return 0;

  const weights: Record<string, number> = {
    high: 3,
    medium: 2,
    low: 1,
  };

  let totalWeight = 0;
  let passedWeight = 0;

  for (const result of results) {
    const weight = weights[result.impact] || 1;
    totalWeight += weight;
    if (result.passed) {
      passedWeight += weight;
    }
  }

  return totalWeight > 0 ? Math.round((passedWeight / totalWeight) * 100) : 0;
}
