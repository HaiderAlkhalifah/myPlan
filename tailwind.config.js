/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  plugins: [require("tailwindcss-neumorphism")],
  variants: {
    neumorphismFlat: ["responsive"],
    neumorphismConcave: false,
    neumorphismConvex: ["responsive", "hover"],
    neumorphismInset: ["focus", "active"],
  },
  theme: {
    neumorphismSize: {
      xs: "0.05em",
      sm: "0.1em",
      default: "0.2em",
      lg: "0.4em",
      xl: "0.8em",
    },
  },
  theme: {
    neumorphismColor: {
      red: {
        100: "#FBEBE9",
        200: "#F5CEC7",
        // ...
      },
    },
  },
  theme: {
    colors: {
      transparent: "transparent",
      whiteb: "#FFFFFF",
      grayb: "#F7F7FD",
      yellowa: "#FCBA40",
      reda: "#ED5464",
      bluea: "#4EC0E9",
      textP: "#565388",
    },
    extend: {},
  },
  plugins: [],
};
