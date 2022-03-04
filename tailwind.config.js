const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'blue': '#68D0DE',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      transparent: 'transparent',
      current: 'currentColor',
      sky: colors.sky,
      'fuckmepurple':{
        200: '#FCEEF3',
        300: '#3D3D3D',
        400: '#F9DCE7',
        500: '#F3B9CE',
        600: '#F3B9CE',
        700: '#ED96B5',
        800: '#ED96B5',
        900: '#EA85A8',
        1000: '#DE3F77',
        1100: '#D12360', 
      },
      'dark': {
        100: '#707070',
        200: '#525252',
        300: '#3D3D3D',
        400: '#3D3D3D',
        500: '#161616',
        600: '#292929',
        700: '#1F1F1F',
        800: '#141414',
        900: '#000000',
      },
      
      'white': '#ffffff',
    },
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono]
    },
  },
  plugins: [],
}
