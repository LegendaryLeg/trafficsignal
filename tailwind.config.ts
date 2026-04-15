import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ["'Bebas Neue'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
        body: ["'IBM Plex Sans'", "sans-serif"],
      },
    },
  },
} satisfies Config;

