import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        ink: "#020617",
        muted: "#6B7280",
        accent: "#16A34A",
        "accent-soft": "#DCFCE7",
        border: "#E5E7EB",
        bg: "#F9FAFB",
        surface: "#FFFFFF",
        brand: {
          primary: "#020617",
          accent: "#16A34A",
          muted: "#6B7280",
          soft: "#E5E7EB",
          bg: "#F9FAFB",
          card: "#FFFFFF",
        },
        text: {
          main: "#020617",
          muted: "#6B7280",
        },
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.75rem",
        lg: "1.25rem",
        xl: "1rem",
      },
      boxShadow: {
        soft: "0 10px 25px rgba(15, 23, 42, 0.06)",
        card: "0 12px 28px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;

