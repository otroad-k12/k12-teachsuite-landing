module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#E8F6FC',
          300: '#A2DEFF',
          400: '#62C7FF',
          500: '#0035F0',
          700: '#01308E',
        },
        yellow: {
          400: '#FFEA2F',
        },
        green: {
          300: '#8EE68C',
        },
        black: {
          600: '#141414',
        },
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        heading: ["Beatrice", "Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
