/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cargo-grey':'#333F4C',
        'cargo-yellow': '#FFB700',
        'cargo-blue': '#3C96B4',
        'cargo-red': '#D7282E'
      }
    },
  },
  plugins: [],
}