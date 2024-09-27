/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      "blue-1": "#CEEFF7",
      "blue-2": "#2A7C9E",
      "white": "#fff", 
      "blue-3": "#181D3C",
      "pink": "#FE3494",

      "blue-1-dark": "#11142A",
      "blue-2-dark": "#5DC4DA",
      "white-dark": "#181D3C", 
      "blue-3-dark": "#fff",
    },
  },
  plugins: [],
}

