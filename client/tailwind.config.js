/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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

