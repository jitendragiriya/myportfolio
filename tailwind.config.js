module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        botop: {
          "0%, 100%": { bottom: "-100px", opacity: "0" },
          "20% ,50%, 80%": { bottom: "0", opacity: "1" },
        },
        circlex: {
          "0%, 100%": { height: "15px", width: "15px" },
          "50%": { height: "25px", width: "25px" },
        },
      },
    },
  },
  plugins: [],
};
