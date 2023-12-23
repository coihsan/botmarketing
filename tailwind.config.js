/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/UI/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: {
          50: "#F0F0F2",
          100: "#AEB5BF",
          200: "#707F8C",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#474F59",
          600: "#0891b2",
          700: "#465059",
          800: "#2D3540",
          900: "#1C2026",
          950: "#0A0B0D",
        },
        grunge: {
          variant1: "#A4A5A6",
        },
      },
    },
  },
  plugins: [],
};
