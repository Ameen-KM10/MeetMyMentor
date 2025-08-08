/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '300px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        dessaufont: ['dessau', ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", "sans-serif"],
        robotoSlab: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
}

