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
      },
    },
  },
  plugins: [],
};
