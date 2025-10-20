/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "display-lg": [
          "3.75rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ], // 60px
        "display-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }], // 48px
        "display-sm": [
          "2.25rem",
          { lineHeight: "1.3", letterSpacing: "-0.02em" },
        ], // 36px
        "heading-lg": ["2rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }], // 32px
        "heading-md": [
          "1.75rem",
          { lineHeight: "1.4", letterSpacing: "-0.01em" },
        ], // 28px
        "heading-sm": [
          "1.5rem",
          { lineHeight: "1.4", letterSpacing: "-0.01em" },
        ], // 24px
        "body-lg": ["1.125rem", { lineHeight: "1.5" }], // 18px
        "body-md": ["1rem", { lineHeight: "1.5" }], // 16px
        "body-sm": ["0.875rem", { lineHeight: "1.5" }], // 14px
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
