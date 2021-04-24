const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./src/**/*.svelte"],

  theme: {
    screens: {
      'xs': '380px',
      ...defaultTheme.screens
    }
  },
  variants: {},
  plugins: []
};