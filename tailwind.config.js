/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      boxShadow: {
        "soft-card": "7px 7px 14px #a9b2b6,-7px -7px 14px #e5f0f6",
        "soft-inner": "inset 7px 7px 14px #a9b2b6,inset -7px -7px 14px #e5f0f6",
        "soft-pub": "7px 7px 14px #a9b2b6,-7px -7px 14px #e5f0f6",
        "soft-pressed": "7px 7px 14px #a9b2b6,-7px -7px 14px #e5f0f6",
      },
      colors: {
        transparent: "transparent",
        white: "#C7D1D6",
        greyb: "#C7D1D6",
        pub: "linear-gradient(145deg, #d5e0e5, #b3bcc1)",
        pressed: "linear-gradient(145deg, #b3bcc1, #d5e0e5)",
        b2: "#C7D1D6",
        yellowa: "#FCBA40",
        reda: "#ED5464",
        bluea: "#4EC0E9",
        purp: "#332A7C",
        textP: "#001F3F",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
