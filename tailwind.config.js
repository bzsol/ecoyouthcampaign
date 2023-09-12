/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#4ade80'
        },
        textcolor: {
          DEFAULT: '#042f2e'
        },
        pcolor: {
          DEFAULT: '#16a34a'
        } 
      }
    },
  },
  plugins: [],
}