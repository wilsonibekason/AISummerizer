import defaultTheme from "tailwindcss/defaultTheme";

import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import scrollbar from "tailwind-scrollbar";
import aspectRatio from "@tailwindcss/aspect-ratio";
import lineClamp from "@tailwindcss/line-clamp";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        satoshi: ["Satoshi", "san Serif"],
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
        inter: ["Inter", "san serif"],
      },
    },
  },
  plugins: [typography, scrollbar, aspectRatio],
};
