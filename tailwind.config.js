/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables dark mode with the 'class' strategy
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nike: '#ff6600', // Custom color added correctly under 'extend'
      },
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
