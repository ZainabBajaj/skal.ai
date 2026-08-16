import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Design tokens. The :root/.dark pair in globals.css drives both themes,
        // so a component never hardcodes a hex and never needs a dark: variant
        // for colour alone.
        paper:   "var(--paper)",
        surface: "var(--surface)",
        ink: {
          DEFAULT: "var(--ink)",
          2: "var(--ink-2)",
          3: "var(--ink-3)",
        },
        rule: {
          DEFAULT: "var(--rule)",
          faint:   "var(--rule-2)",
        },
        signal: "var(--signal)",
        brand:  "var(--brand)",

        // The inverse band. Dark in both themes — see globals.css.
        band: {
          DEFAULT: "var(--band)",
          ink:     "var(--band-ink)",
          2:       "var(--band-ink-2)",
          rule:    "var(--band-rule)",
          accent:  "var(--band-accent)",
        },

        // Kept as-is: the routes outside this design pass still paint with
        // these, and dropping them would break them silently.
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#223044',
          900: '#0f172a',
          950: '#020617',
        },
        black: '#0f172a',
      },
      fontFamily: {
        sans:    ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        shell: '76rem',
        read:  '44rem',
      },
    },
  },
  plugins: [typography],
} satisfies Config;
