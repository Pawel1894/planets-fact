/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Spartan", "sans-serif"],
      antonio: ["Antonio", "sans-serif"],
    },
    colors: {
      white: "#ffffff",
      neutral: {
        100: "#070724",
        200: "#38384F",
        300: "#838391",
      },
      accent: {
        100: "#419EBB",
        200: "#EDA249",
        300: "#6f2ed6",
        400: "#D14C32",
        500: "#D83A34",
        600: "#CD5120",
        700: "#1ec2a4",
        800: "#2d68f0",
      },
    },
    extend: {},
  },
  plugins: [],
};
