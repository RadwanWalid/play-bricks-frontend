/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  })
})

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components shared/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'wave-animation': {
          '0%, 25%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
          '75%, 100%': { transform: 'translateY(0px)' },
        }
      }, 
      animation: {
        bounce: 'wave-animation 5s infinite', 
      }, 
      screens: {
        '1130': { max: '1130px' },
        '988': { max: '988px' },
        '704': { max: '704px' },
        '636': { max: '636px' },
        '580': { max: '580px' },
        '512': { max: '512px' },
        '434': { max: '434px' },
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    rotateY,
  ],
}
