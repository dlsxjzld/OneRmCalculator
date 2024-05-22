/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'customBlue-550': '#0067D6',
        'customWhite-100': '#eee',
      },
    },
  },
  plugins: [],
};
