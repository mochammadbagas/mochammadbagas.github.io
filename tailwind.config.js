module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'accent': '#D67441',
        'accent-hover': '#CB562F',
        'accent-light': '#FBFBFF',

        'grey-1': '#1A1A1A',
        'grey-2': '#555555',
        'grey-3': '#C4C4C4',
        'grey-4': '#F0F0F0',
        'grey-5': '#8E9092',
        'grey-6': '#262626',

        'error': '#F25555',
        'error-light': '#FFEFEF',
      },
      fontFamily: {
        'overpass': 'Overpass',
        'source': 'Source-Serif-Pro',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
