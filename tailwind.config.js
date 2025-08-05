module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'blue-900': '#141414',
        'blue-800': '#0035F0',
        'blue-700': '#0035F0',
        'blue-600': '#0035F0',
        'blue-100': '#E6ECFA',
        'yellow-400': '#FFD600',
        'yellow-100': '#FFF9E3',
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
