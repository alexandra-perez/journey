/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6D28D9',
          DEFAULT: '#FF0000',
          dark: '#21AA6D',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
