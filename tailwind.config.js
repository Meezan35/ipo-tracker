/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1D2540',  
        orange: '#FF7A00' 
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif']
      }
    },
  },
  plugins: [],
}

