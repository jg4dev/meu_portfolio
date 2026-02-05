/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ativa tema escuro via classe
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
