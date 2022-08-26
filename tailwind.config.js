/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#FFFFFF",
        greyb: "#F7F7FD",
        b2:"#FFFFFF",
        yellowa: "#FCBA40",
        reda: "#ED5464",
        bluea: "#4EC0E9",
        textP: "#565388",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
