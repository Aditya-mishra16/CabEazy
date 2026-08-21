import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        brandColor: {
          DEFAULT: "#F15533",
          hover: "#d94c2c",
          light: "#ffe5df",
          dark: "#c03c1f",
          50: "#fff1ee",
          100: "#ffe0d9",
          500: "#F15533",
          600: "#d94c2c",
          700: "#b53b1e",
        },
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        card: "0 10px 30px -4px rgba(0, 0, 0, 0.08)",
        floating: "0 20px 40px -10px rgba(241, 85, 51, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
