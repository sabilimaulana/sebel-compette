const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#F2AD5F",
          100: "#986121",
        },
      },
      fontFamily: {
        sans: ["Asap", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
