/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main': '#EB0029',
      'play': '#F2C94C',
      'white': '#fff',
      'black': '#000',
      'gray': '#E0E0E0',
      'darkgray': '#999999'
    },

    fontFamily: {
      Rubik: ["Rubik"],
      Lobster: ["Lobster Two"],
    },

    extend: {},
  },
  plugins: [],
}

