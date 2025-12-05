import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui/PageHeader";
import { Prose } from "@/components/ui/Prose";

const BRAND_GUIDELINES_MD = `## **Ecommerce Playbook Brand Guidelines (V2)**

*A modern, trustworthy, and human approach to crypto investing.*

---

### **1. Brand Essence**

**Tagline:**

> “Your savings growth begins right here.”

**Positioning:**

Mineral makes investing in cryptocurrency approachable, transparent, and intuitive. It combines financial confidence with elegant design to help users visualize growth potential.

**Tone:**

* Clear and instructive
* Professional but human
* Confident, calm, and encouraging

---

### **2. Logo**

**Wordmark:** *Mineral* — paired with a geometric crystal symbol.

**Style:** Minimal, modular, crystalline.

**Usage Rules:**

* Maintain generous padding.
* Light logo on dark or photo backgrounds; dark logo on light backgrounds.
* Never distort or overlay with gradients.

---

### **3. Color Palette**

| Type                  | Color   | Use                              |
| --------------------- | ------- | -------------------------------- |
| **Primary Deep Blue** | #0B2430 | Headlines, navigation, and CTAs  |
| **Accent Sky Blue**   | #1C67FF | Highlights, links, active states |
| **Soft Green**        | #7BE38E | Charts, growth visuals           |
| **Soft Gray**         | #E9EDF3 | Backgrounds, dividers            |
| **Pure White**        | #FFFFFF | Primary background               |
| **Black**             | #000000 | Text on light backgrounds        |
| **Yellow Accent**     | #FFC600 | Ratings, emphasis states         |

**Visual Mood:**

Modern fintech clarity — bright, breathable, with subtle depth.

---

### **4. Typography**

**Primary Typeface:** *Inter* or *Satoshi*

**Fallback:** *Helvetica Neue, Arial, sans-serif*

| Level       | Font Weight      | Example                        |
| ----------- | ---------------- | ------------------------------ |
| Headline    | Bold (700–800)   | “See your growth potential”    |
| Subheadline | Medium (500–600) | “The average annual return…”   |
| Body        | Regular (400)    | Used in charts and calculators |
| Button      | Semi-Bold        | “Calculate”                    |

**Style Guidelines:**

* Ample letter spacing for clarity.
* Use lowercase or sentence case for warmth.
* Avoid italics; use color and weight for emphasis.

---

### **5. Photography**

**Style:** Real, aspirational, and minimal.

**Subjects:** Everyday professionals in natural light, often in urban or serene outdoor environments.

**Mood:** Calm confidence — symbolizes growth, potential, and simplicity.

**Example:** A serene portrait (used in calculator module) shows focus, aspiration, and individuality against soft backgrounds.

---

### **6. UI Design Language**

#### **A. Layout System**

* Rounded corner containers with soft shadows.
* White cards layered over gradient or image backgrounds.
* Large spacing and breathable margins.
* Use of blur/glassmorphism effects in hero and calculator modules.

#### **B. Buttons**

| Variant           | Background             | Text    | Notes              |
| ----------------- | ---------------------- | ------- | ------------------ |
| **Primary CTA**   | #0B2430                | #FFFFFF | e.g. “Get Started” |
| **Secondary CTA** | Transparent / outlined | #0B2430 | e.g. “Learn more”  |
| **Utility**       | #F5F6FA                | #0B2430 | e.g. “Reset”       |

**Shape:** Rounded rectangles with pill-like softness

**Hover:** Slight elevation, soft glow, or subtle color shift

---

### **7. Iconography & Illustrations**

* **3D floating crypto icons:** Adds motion and depth.
* **Outline icons:** Minimal and rounded (used for chart legends and form controls).
* **Decorative gradients:** Used subtly in section dividers and button highlights.

**Example:** Floating “Tether” icon and abstract orb create futuristic yet friendly visual appeal.

---

### **8. Calculator Component (Design Reference)**

#### **Purpose:**

To visualize growth and simplify complex financial projections.

#### **Design Elements:**

* Split-screen layout: photo block on left, input + chart on right.
* Clean white UI with pastel shadows.
* Rounded containers with soft gradients.

#### **Functional Styling:**

| Element         | Style                                            |
| --------------- | ------------------------------------------------ |
| **Inputs**      | White rounded boxes with minimalist outlines     |
| **Sliders**     | Gradient blue accent, circular handles           |
| **Result Card** | Large typography with contrast; centered display |
| **Chart**       | Bar graph with blue and green color coding       |
| **Microcopy**   | Gray tone, small font size for disclaimers       |

---

### **9. Data Visualization Style**

**Chart Aesthetic:**

* Rounded bars with gradient fills.
* Muted tones to balance the UI (green for gains, blue for contributions).
* Simple Y-axis labeling, no gridlines.

**Typography inside charts:**

* Light, sans-serif font.
* Minimal text for clarity.

---

### **10. Brand Imagery Direction**

**Keywords:** Growth • Clarity • Future • Trust

* Layered visual composition using sky, city, and natural textures.
* Soft blue and green gradients to suggest calm optimism.
* Floating 3D icons reinforce modern digital tone.

---

### **11. Messaging Examples**

| Section           | Example Copy                                                                                          | Purpose                         |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------- |
| **Hero**          | “Your savings growth begins right here.”                                                              | Inspires action and confidence. |
| **Subhead**       | “An all-in-one way to invest in crypto, created with leading global practices in capital management.” | Reinforces credibility.         |
| **Feature Block** | “Easily estimate your savings and returns in seconds with our intuitive crypto calculator.”           | Simplifies complex ideas.       |

**Voice:** Conversational, reassuring, smart.

---

### **12. Motion & Interaction**

* Smooth fade transitions between sections.
* Floating 3D elements move subtly on scroll.
* Micro-animations reinforce state changes (hover, input, or calculate).
* Overall rhythm: calm and confident, never flashy.

---

### **13. Accessibility**

* Maintain high contrast (WCAG AA+).
* Font sizes: minimum 16px for body, 28–36px for headlines.
* Interactive elements maintain visible focus states.
* Use semantic HTML hierarchy in digital builds.

---

### **14. Personality Summary**

| Trait           | Expression                                 |
| --------------- | ------------------------------------------ |
| **Calm**        | Soft gradients, ample whitespace           |
| **Intelligent** | Data visualization and calculators         |
| **Trustworthy** | Structured typography and real photography |
| **Innovative**  | Subtle 3D motion and minimalist UI         |
`;

export const metadata: Metadata = {
  title: "Brand Guidelines – eCommerce Playbook",
  description:
    "Ecommerce Playbook Brand Guidelines (V2): a modern, trustworthy, and human approach to crypto investing with Mineral.",
};

export default function BrandGuidelinesPage() {
  return (
    <Section background="muted">
      <div className="space-y-12">
        <PageHeader
          eyebrow="Brand"
          title="Ecommerce Playbook Brand Guidelines (V2)"
          description="A modern, trustworthy, and human approach to crypto investing for Mineral."
        />
        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
          <Prose content={BRAND_GUIDELINES_MD} />
        </div>
      </div>
    </Section>
  );
}


