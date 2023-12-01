/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif'], 
      },
      height: {
        vertical: "700px"
      }
    },
  },
  plugins: [],
};

