const customColors  = require('./src/core/styles/customColors');
const customFontSizes  = require('./src/core/styles/customFontSizes');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow"', 'sans-serif']
      },
      colors: customColors,
      fontSize: customFontSizes,
      boxShadow: {
        'custom-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'custom-shadow-inp': '0 0 6px 1px rgba(68, 158, 232, 0.923)',
      },
    },
  },
  plugins: [],
}