/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["corporate","dracula", "night", "cmyk"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
