/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'light-cyan': '#cee3e9',
      'neon-green': '#52ffa8',
      'grayish-blue': '#4e5d73',
      'dark-grayish-blue': '#323a49',
      'dark-blue': '#1f2632',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
