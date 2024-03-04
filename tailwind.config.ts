/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
    './node_modules/flowbite-react/lib/esm/**/*.js',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E1F3FA",
          100: "#B3E1F5",
          200: "#80CDEF",
          300: "#4DB9E9",
          400: "#1AA5E3",
          500: "#0371A5",
          600: "#025C7D",
          700: "#014755",
          800: "#012E2D",
          900: "#001506",
        },
        secondary: {
          50: "#E5E5E6",
          100: "#C8C8CA",
          200: "#ABABAE",
          300: "#8E8E92",
          400: "#717176",
          500: "#313338",
          600: "#28282A",
          700: "#1F1F1F",
          800: "#161616",
          900: "#0D0D0D",
        },
        discord: "#7289da",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),

  ],
};
export default config;
