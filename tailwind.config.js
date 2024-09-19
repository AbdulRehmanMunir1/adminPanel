/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pur : "#7E22CE",
        Dpur : "#6B21A8",
        primary :"#3F3F46 ",
        secondary :"#52525B ",
        third :"#18181B ",
        fourth :"#27272A ",
      }
    },
  },
  plugins: [],
}
