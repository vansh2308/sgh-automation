/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-1": "#CEEFF7",
        "blue-2": "#2A7C9E",
        "blue-3": "#181D3C",
        "pink": "#FE3494"
      }
    },
  },
  plugins: [],
}

