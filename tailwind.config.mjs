import defaultTheme from "tailwindcss/defaultTheme";
import typographyPlugin from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,ts,tsx}"],
  darkMode: "class",
  plugins: [typographyPlugin],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['"Fira Code Variable"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
