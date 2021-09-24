module.exports = {
  mode: 'jit',
  purge: [
    'public/css/*.css',
    'views/**/*.hbs'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},  
  },
  plugins: [],
}
