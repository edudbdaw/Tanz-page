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
          // --- Official colors ---
          teal: '#027D8F',       
          turquoise: '#09BE9C',  
          green: '#83D374',      
          lime: '#C6E12E',       
          yellow: '#FAF070',     
          blue: '#3A91C1',       
          orange: '#FF5715',     
          ivory: '#FFFFF6',      
          purple: '#AA8BF7',     
          red: '#D00D1E',        
          dark: '#0F0A0A',       
          'green': '#027D8F',    
          'gold': '#FF5715',     
          'beige': '#FFFFF6',    
          'text': '#0F0A0A',     
          'dark': '#0F0A0A',     
        }
      }
    },
  },
  plugins: [],
}