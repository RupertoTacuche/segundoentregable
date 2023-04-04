/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "lato":['Lato', "sans-serif"
      ],
      gridTemplateColumns: {
        "two": "auto auto"
      }
    },
  },
  plugins: [],
}

