/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top -3rem',
    },
    extend: {
      colors: {
        'custom-grey': '#f2f1f0',
        'lime-custom': '#D2F05D',
        'light-brown': '#B59F9F',
        'btn-grey': '#BEBEBE',
      },
    },
  },
  plugins: [],
};
