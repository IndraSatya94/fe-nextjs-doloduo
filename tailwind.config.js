const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: "class",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container:{
      center:true,
    },
    screens: {
       sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      purple: colors.purple,
      white: colors.white,
      black: colors.black,
      //new color
      primary:{
          DEFAULT:'#5C6BA3',
          dark:'#3e5096',
      },
      secondary:{
        DEFAULT:'#fed330',
        dark:'#f7b731',
      },
      tertiary:{
        DEFAULT:'#52524c',
        dark:'#52524c',
      },
      konten:{
        DEFAULT:'#333',
      }

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      lobster:['Lobster'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
  require('@tailwindcss/typography'),
  ],
}
