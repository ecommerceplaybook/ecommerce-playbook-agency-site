# CRO & Performance Checker – Full Functional Specification

## 1. Product Overview

The CRO & Performance Checker is a web-based application that allows a user to enter a URL and receive an automated, visually rich, and actionable audit of their website’s **conversion rate optimization (CRO), performance, accessibility, and technical foundations**.

The product is designed to feel like a **productized CRO audit**, combining:

* Deterministic, rule-based checks
* Browser-rendered page analysis
* Performance and accessibility diagnostics
* AI-assisted explanations and prioritization

The end result is a **shareable report** that clearly communicates:

* What is working
* What is broken or missing
* Why it matters for conversions
* How hard it is to fix
* Where to focus first

---

## 2. Core User Journey

### 2.1 Landing Page

**Primary goal:** Get the user to submit a URL.

**Functionality:**

* URL input field (with validation)
* Primary CTA ("Check your performance for free")
* Supporting copy explaining what is scanned
* Optional example report preview
* Trust indicators (free, no login, no install)

**Behavior:**

* Normalizes input URL (adds https, strips params)
* Prevents duplicate submissions while loading

---

### 2.2 Scan Initialization

**Primary goal:** Create a scan job and transition user to analysis state.

**Functionality:**

* Create a new scan record with unique ID
* Store initial status: `queued`
* Redirect user to `/report/:id` with loading UI

---

### 2.3 Analyzing State

**Primary goal:** Communicate progress and reduce perceived wait time.

**Functionality:**

* Step-based progress indicator
* Real-time status updates via polling

**Steps displayed to user:**

1. Fetching website
2. Rendering page
3. Capturing screenshots
4. Running CRO checks
5. Analyzing performance
6. Generating recommendations

**Behavior:**

* Graceful handling of partial failures
* Continues scan even if some steps fail

---

## 3. Technical Scanning Pipeline

### 3.1 URL Normalization & Validation

**Functionality:**

* Ensure valid URL format
* Enforce https when possible
* Follow redirects
* Strip tracking parameters
* Detect blocked or unreachable sites

---

### 3.2 Browser Rendering (Browserless)

**Purpose:** Obtain real, JS-rendered page content.

**Endpoints used:**

* Rendered HTML content
* Screenshots
* Selector-based scraping or function execution

**Behavior:**

* Waits for network idle or key selectors
* Blocks unnecessary resources where applicable
* Uses best-attempt fallback strategy

---

### 3.3 Page Coverage Strategy

**Default pages scanned:**

* Homepage
* First discovered collection/category page (if eCommerce)
* First discovered product page (if eCommerce)

**Optional future expansion:**

* Cart page
* Checkout (limited visibility)
* Blog pages

---

## 4. Signal Extraction Layer

This layer extracts **raw facts**, not opinions.

### 4.1 Content Signals

* Page title
* Meta description
* H1–H3 headings
* Hero section text
* CTA button text and count
* Navigation structure
* Footer links

### 4.2 Trust & Credibility Signals

* Phone number detection
* Physical address detection
* Email address detection
* Privacy policy presence
* Terms & conditions presence
* Returns/refunds page presence
* Trust badges or guarantees
* Testimonials or reviews widgets

### 4.3 Social Proof & Engagement

* Social media links
* Embedded videos
* Review platform integrations
* Partner or logo sections

### 4.4 Analytics & Tracking

* Google Analytics (GA4)
* Google Tag Manager
* Meta Pixel
* Other marketing pixels
* Cookie consent mechanisms

### 4.5 Design & UX Signals

* Font families detected
* Color palette breadth
* CTA color contrast
* Image count
* Image dimension attributes
* Above-the-fold content density

### 4.6 Technical Signals

* Script count
* CSS count
* Presence of schema markup
* Structured data types
* Platform detection (Shopify, Webflow, WooCommerce, etc.)

---

## 5. Rule Engine (Deterministic Checks)

The rule engine converts signals into **pass/fail outcomes**.

### 5.1 Rule Structure

Each rule includes:

* Rule ID
* Category
* Title
* Detection logic
* Pass/fail result
* Evidence
* Impact (low / medium / high)
* Effort estimate (time or size)
* Recommendation template

### 5.2 CRO Rule Categories

#### A. Messaging & Value Proposition

* Clear headline explaining benefit
* Benefits emphasized over features
* Unique value proposition present

#### B. Calls to Action

* Primary CTA exists
* CTA is visually distinct
* Repeated CTAs on long pages
* CTA placement above the fold

#### C. Trust & Credibility

* Phone/address present
* Policies easily accessible
* Testimonials or reviews present
* Trust symbols near CTAs

#### D. Content & Education

* FAQ present
* About page clarity
* Blog presence
* Scannable copy structure

#### E. Conversion Mechanics

* Forms optimized (multi-step vs long)
* Live chat or support option
* Lead capture mechanisms
* Retargeting readiness

#### F. Visual & UX Best Practices

* Readable fonts
* Human imagery usage
* Mobile responsiveness
* Clean navigation

---

## 6. Performance Analysis

### 6.1 Metrics Collected

* First Contentful Paint (FCP)
* Largest Contentful Paint (LCP)
* Total Blocking Time (TBT)
* Time to Interactive (TTI)
* Cumulative Layout Shift (CLS)
* Speed Index

### 6.2 Diagnostics

* Unused CSS
* Unused JavaScript
* Render blocking resources
* Large network payloads
* Image optimization issues
* Cache policy issues
* DOM size warnings
* Long main-thread tasks

### 6.3 Scoring

* Normalized Lighthouse-style scores
* Performance score contributes to overall score

---

## 7. Accessibility Analysis

### 7.1 Checks Performed

* ARIA roles and attributes validity
* Button accessible names
* Color contrast
* Heading hierarchy
* Landmark regions
* Language attributes
* Touch target sizing
* Viewport configuration

### 7.2 Output

* Pass/fail per accessibility rule
* Explanations and remediation guidance

---

## 8. OpenAI Analysis Layer

OpenAI is used **only after facts are known**.

### 8.1 Inputs Provided to AI

* Rule results (pass/fail + evidence)
* Page context (platform, industry, page type)
* Impact and effort metadata

### 8.2 Outputs Generated

* Plain-language explanations
* Why each issue matters for conversions
* Step-by-step fix instructions
* Verification steps
* Priority grouping (quick wins vs high impact)

### 8.3 Guardrails

* Strict JSON output
* No fact discovery by AI
* Evidence referenced explicitly

---

## 9. Scoring & Prioritization

### 9.1 Category Scores

* CRO score
* Performance score
* Accessibility score
* Optional SEO/Technical score

### 9.2 Overall Score

Weighted calculation across categories.

### 9.3 Priority Buckets

* Quick Wins (high impact, low effort)
* High Impact Projects
* Technical Debt

---

## 10. Report Experience

### 10.1 Report Header

* Website URL
* Scan timestamp
* Overall score visualization
* Category pass/fail summaries

### 10.2 Checklist View

* Expandable rule cards
* Pass/fail indicators
* Impact and effort chips
* Evidence and screenshots

### 10.3 Deep-Dive Tabs

* CRO
* Performance
* Accessibility
* Technical

### 10.4 Screenshots

* Above-the-fold capture
* Optional full-page capture

### 10.5 Actions

* Copy report link
* Share report
* (Future) Export PDF

---

## 11. Failure & Edge Case Handling

* Partial scans still generate reports
* Clear messaging for blocked pages
* Timeouts handled gracefully
* Missing data marked transparently

---

## 12. Data Model Overview

### Scan

* id
* url
* status
* createdAt
* completedAt
* scores

### RuleResult

* ruleId
* category
* passed
* impact
* effort
* evidence
* aiNarrative

### Artifacts

* screenshots
* raw metrics

---

## 13. Security & Compliance

* No credential access
* No form submissions
* No personal data storage
* Read-only analysis

---

## 14. Future Enhancements

* User accounts
* Scan history
* Benchmark comparisons
* Industry-specific scoring
* A/B test hypotheses generation
* Email capture and lead scoring
* White-labeled reports

---

## 15. Product Philosophy

The CRO Checker is designed to:

* Educate without overwhelming
* Prioritize business impact over vanity metrics
* Feel like a consultant in product form
* Bridge the gap between data and action
