/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 24px 0 rgba(0,0,0, 0.45) inset'
      },
      colors: {
        'main-purple': '#b55bff'
      }
    },
  },
  plugins: [],
}