/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Tussilago', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#6B705C',  // olive green
          beige: '#F0EFEB',  // beige
          gold: '#B58E3E',   // gold
          text: '#2F3E46',   // dark
        }
      }
    },
  },
  plugins: [],
}