/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        zBlue: {
          100: "#13005A",
          200: "#00337C",
          300: "#1C82AD",
        },
        zGreen: "#03C988",
        zText: "#191A19",
        hText: "#0F0E0E",
        dDiv: "#EEEEEE",
        dhDiv: "#A4B494",
      },
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
