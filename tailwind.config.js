/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'customWhite-100': '#eee',
        light: {
          'customBlue-550': '#0067D6',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
