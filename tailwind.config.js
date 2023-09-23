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
      },
      fontFamily: {
        "title": ['Rufina', "sans-serif"],
        "text": ['Oxygen', "serif"],
      },
      gridTemplateColumns: {
        'body-2': 'minmax(0, 80px) minmax(0, 1fr)',
      },
      gridTemplateRows: {
        'section-2': 'minmax(0, 50px) minmax(0, 1fr)',
      }
    },
  },
  plugins: [],
}

