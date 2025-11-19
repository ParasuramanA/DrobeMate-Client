/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // Next.js app directory
    "./pages/**/*.{js,ts,jsx,tsx}",     // pages directory
    "./components/**/*.{js,ts,jsx,tsx}",// components directory
    "./src/**/*.{js,ts,jsx,tsx}"        // optional if you use src/
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
