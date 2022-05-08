/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "2rem",
        },
        screens: {
          sm: "600px",
          md: "768px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1596px",
        },
      },
    },
  },
  plugins: [],
};
