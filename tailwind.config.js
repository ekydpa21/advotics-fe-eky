/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        "header-shadow": "0px 3px 6px #00000029",
      },
      gridTemplateColumns: {
        "main-layout": "auto 1fr",
      },
      gridTemplateRows: {
        "main-layout": "auto 1fr",
      },
    },
  },
  plugins: [],
}
