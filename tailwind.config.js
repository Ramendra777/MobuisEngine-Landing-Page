/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0649E7",
        secondary: "#022183",
        light: "#EBF1FF",
        white: "#FEFEFE",
        dark: "#101010",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        h1: "80px",
        h2: "40px",
        h3: "32px",
        h4: "24px",
        p1: "18px",
        p2: "16px",
      },
      borderRadius: {
        custom: "20px",
      },
    },
  },
  plugins: [],
};