/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': "#64CCC5",
        "light-gray": "#F4F4F4"
      }
    },
  },
  plugins: [],
}