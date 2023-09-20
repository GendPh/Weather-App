/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,js}", "index.html"],
  theme: {
    extend: {
      colors: {
        "text": "#f0f1f1",
        "text-secondary": "#616a75",
        "background": "#0b131e",
        "background-secondary": "#202b3b",
        "button": "#35465e",
      }
    },
  },
  plugins: [],
}
