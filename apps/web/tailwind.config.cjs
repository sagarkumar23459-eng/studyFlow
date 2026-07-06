/** Tailwind v4 config for apps/web (CommonJS)
 * - Explicit content globs for a pnpm monorepo (keeps production purging accurate).
 * - Colors mapped to CSS variables for runtime theming and alpha support.
 * - Minimal extend that keeps defaults but exposes variables and font-family.
 */
module.exports = {
  content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "../../packages/**/*.{js,ts,jsx,tsx,mdx}",
],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Map Tailwind color names to CSS variables (RGB triplet + alpha support).
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
        ],
      },
    },
  },
  plugins: [],
};