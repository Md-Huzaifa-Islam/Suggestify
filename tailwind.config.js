/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#0A1124",
        primaryBtn: "#4A6EE0",
        mainBg: "#161722",
        cardBg: "#2C303A",
      },
      fontFamily: {
        helvetica: ["helvetica", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
