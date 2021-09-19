module.exports = {
  purge: [
    'views/**/*.hbs'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },  
  },
  plugins: [],
}
