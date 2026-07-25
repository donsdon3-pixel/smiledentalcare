import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          blue: {
            50: "#eff8ff",
            100: "#dff1ff",
            200: "#b7e4ff",
            300: "#78ceff",
            400: "#32b5f5",
            500: "#0898dc",
            600: "#0079bb",
            700: "#066296",
            800: "#0b527c",
            900: "#0f4567",
          },
          gray: {
            50: "#f8fafc",
            100: "#eef3f7",
            200: "#d9e3ea",
            300: "#b9c8d3",
            400: "#8fa5b4",
            500: "#6f8798",
            600: "#536b7d",
            700: "#415666",
            800: "#31414e",
            900: "#202d38",
          },
          white: "#ffffff",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 69, 103, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
