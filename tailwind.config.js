const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    'public/css/main.css',
    'views/**/*.hbs'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      teal: colors.teal,
      green: colors.green,
      blue: colors.blue
    },
    extend: {
     width: {
       'max': 'max-content'
     },
     fontFamily: {
       sans: ['Inter'],
       mono: ['JetBrains Mono'],
       serif: ['Noto Serif']
     }
    }
  },
  variants: {
    extend: {},  
  },
  plugins: [],
}
