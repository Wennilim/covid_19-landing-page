/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header": "url('/src/assets/bg1.png')",
        "footer": "url('/src/assets/bg2.png')",
      },
    },
  },
  plugins: [],
}