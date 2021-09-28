module.exports = {
  mode: 'jit',
  purge: [
    'public/css/*.css',
    'views/**/*.hbs'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},  
  },
  plugins: [],
}
