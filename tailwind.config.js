/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // colors
      colors: {
        primary: {
          light: '#6D28D9',
          DEFAULT: 'red',
          dark: '#21aa6d',
        },
      },
    },
    plugins: [],
  },
};
