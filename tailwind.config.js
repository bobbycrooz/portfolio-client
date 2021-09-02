module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: "#040404",
        secondary: "#DEDEDE",
        textLow: "#373737",
        glow: {
          full: "hsla(186, 100%, 69%, 1)",
          low: "hsla(217, 100%, 50%, 1) "
        },
        grad: {
          one: "#F44369",
          two: "#3E3B92",

        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
