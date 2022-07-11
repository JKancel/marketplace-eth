/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        "2": "2 2 0%"
      },
      maxWidth: {
        "8xl": "1920px"
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
}