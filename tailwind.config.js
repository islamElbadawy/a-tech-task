/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px', // Change the maxWidth for xl to 1280px
        },
      },
    },
    fontFamily: {
      english: ['Inter', 'sans-serif'],
      arabic: ['Neo Sans Arabic', 'sans-serif'],
      mont: ['Montserrat', 'sans-serif'],
      poppins: ['poppins', 'sans-serif'],
    },
    colors: {
      bgColor: '#F3F5F7',
      mainColor: '#8A74F9',
      textColor: '#1C1C28',
      textLight: '#99A1B7',
      tooltipColorBg: '#1E1B39',
    },
  },
  plugins: [],
}
