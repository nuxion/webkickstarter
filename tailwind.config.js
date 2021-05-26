module.exports = {
  purge: [
     './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'serif': ['Nunito Sans'],
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
