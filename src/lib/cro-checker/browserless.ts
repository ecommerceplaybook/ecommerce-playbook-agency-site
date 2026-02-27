const BROWSERLESS_API_KEY = process.env.BROWSERLESS_API_KEY;
const BROWSERLESS_URL = process.env.BROWSERLESS_URL || "https://chrome.browserless.io";

interface BrowserlessOptions {
  timeout?: number;
  waitUntil?: "networkidle0" | "networkidle2" | "load" | "domcontentloaded";
}

interface PageContent {
  html: string;
  url: string;
}

interface ScreenshotOptions {
  fullPage?: boolean;
  width?: number;
  height?: number;
}

/**
 * Fetch and render a page using Browserless API
 */
export async function fetchPage(url: string, options: BrowserlessOptions = {}): Promise<PageContent> {
  if (!BROWSERLESS_API_KEY) {
    throw new Error("BROWSERLESS_API_KEY is not configured");
  }

  const { timeout = 30000, waitUntil = "networkidle2" } = options;

  try {
    const response = await fetch(`${BROWSERLESS_URL}/content?token=${BROWSERLESS_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        waitUntil,
        timeout,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Browserless API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return {
      html: data.html || "",
      url: data.url || url,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch page: ${error.message}`);
    }
    throw error;
  }
}

/**
 * Take a screenshot of a page using Browserless API
 */
export async function takeScreenshot(
  url: string,
  options: ScreenshotOptions = {},
): Promise<Buffer> {
  if (!BROWSERLESS_API_KEY) {
    throw new Error("BROWSERLESS_API_KEY is not configured");
  }

  const { fullPage = true, width = 1920, height = 1080 } = options;

  try {
    const response = await fetch(`${BROWSERLESS_URL}/screenshot?token=${BROWSERLESS_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        options: {
          fullPage,
          viewport: {
            width,
            height,
          },
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Browserless screenshot error: ${response.status} - ${errorText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to take screenshot: ${error.message}`);
    }
    throw error;
  }
}

/**
 * Execute JavaScript in the browser context and return results
 */
export async function executeScript<T = unknown>(
  url: string,
  script: string,
  options: BrowserlessOptions = {},
): Promise<T> {
  if (!BROWSERLESS_API_KEY) {
    throw new Error("BROWSERLESS_API_KEY is not configured");
  }

  const { timeout = 30000, waitUntil = "networkidle2" } = options;

  try {
    const response = await fetch(`${BROWSERLESS_URL}/function?token=${BROWSERLESS_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        code: `
          (async () => {
            await page.waitForLoadState('${waitUntil}', { timeout: ${timeout} });
            return ${script};
          })();
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Browserless script execution error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to execute script: ${error.message}`);
    }
    throw error;
  }
}

/**
 * Get performance metrics using Browserless Performance API
 */
export async function getPerformanceMetrics(url: string): Promise<{
  fcp: number | null;
  lcp: number | null;
  tbt: number | null;
  cls: number | null;
  speedIndex: number | null;
  tti: number | null;
}> {
  if (!BROWSERLESS_API_KEY) {
    throw new Error("BROWSERLESS_API_KEY is not configured");
  }

  try {
    const script = `
      (async () => {
        const performance = await page.evaluate(() => {
          const perfData = window.performance.getEntriesByType('navigation')[0];
          const paintEntries = window.performance.getEntriesByType('paint');
          const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
          
          return {
            fcp: fcp ? fcp.startTime : null,
            loadEventEnd: perfData ? perfData.loadEventEnd : null,
          };
        });
        
        // Use PerformanceObserver for LCP if available
        const lcp = await page.evaluate(() => {
          return new Promise((resolve) => {
            if (typeof PerformanceObserver === 'undefined') {
              resolve(null);
              return;
            }
            const observer = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              resolve(lastEntry ? lastEntry.startTime : null);
            });
            try {
              observer.observe({ entryTypes: ['largest-contentful-paint'] });
              setTimeout(() => {
                observer.disconnect();
                resolve(null);
              }, 5000);
            } catch (e) {
              resolve(null);
            }
          });
        });
        
        return {
          fcp: performance.fcp,
          lcp: lcp,
          tbt: null, // Would need more complex calculation
          cls: null, // Would need LayoutShiftObserver
          speedIndex: null, // Would need visual metrics
          tti: performance.loadEventEnd,
        };
      })();
    `;

    const result = await executeScript<{
      fcp: number | null;
      lcp: number | null;
      tbt: number | null;
      cls: number | null;
      speedIndex: number | null;
      tti: number | null;
    }>(url, script);

    return result;
  } catch (error) {
    // Return null values on error
    console.error("Failed to get performance metrics:", error);
    return {
      fcp: null,
      lcp: null,
      tbt: null,
      cls: null,
      speedIndex: null,
      tti: null,
    };
  }
}
