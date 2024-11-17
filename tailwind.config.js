// tailwind.config.js
module.exports = {
  content: ["./***.html"],
  theme: {
    extend: {
      colors: {
        navy: "#121A30",
        gold: "#CDB63E",
        green: "#455C3B",
        orange: "#FF5D17",
        red: "#910C12",
        white: "#FFFFFF",
      },
      fontFamily: {
        inknut: ['"Inknut Antiqua"', "serif"],
        inria: ['"Inria Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
