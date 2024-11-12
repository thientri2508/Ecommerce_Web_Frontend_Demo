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
        sans: ['"Be Vietnam Pro"', 'sans-serif'],
        heading: ['"Paytone One"', 'sans-serif'],
        price: ['"Arvo"', 'sans-serif'],
      },
      colors: customColors,
      fontSize: {
        base: '13px',
        ...customFontSizes
      },
      boxShadow: {
        'custom-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'custom-shadow-inp': '0 0 6px 1px rgba(68, 158, 232, 0.923)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(24deg, #D91D2C 24%, #FF5700 94%)',
      },
      backgroundColor: {
        'custom-bg': 'rgba(0,0,0,0.6)',
      },
      screens: {
        'sm+': '700px',
        'md+': '950px',
        'lg+': '1200px',
        'xl+': '1400px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
    },
  },
}