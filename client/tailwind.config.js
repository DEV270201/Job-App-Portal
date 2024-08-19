/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0284C7",
        "secondary-blue": "#0369A1",
        "dark-100": "#0d1117",
        "dark-200": "#0F172A",
      }
    },
  },
  plugins: [],
}

