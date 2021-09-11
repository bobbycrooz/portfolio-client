module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      joe: ['Josefin Sans', 'sans-serif'],
      logo: ['Pacifico', 'cursive'],
      robo: ['Roboto', 'sans-serif']
    },
    extend: {
      spacing: {
        'btn-w': '140.5px',
        'btn-h': '44px'
      },
      colors: {
        body: '#090909',
        primary: '#040404',
        secondary: '#C3C3C3',
        textLow: '#474747',
        textRead: '#8D8D8D',
        glow: {
          full: 'hsla(186, 100%, 69%, 1)',
          low: 'hsla(217, 100%, 50%, 1) '
        },
        grad: {
          one: '#F44369',
          two: '#3E3B92',
          three: ''
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
