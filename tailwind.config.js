/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: { 50: '#f6f0fb', 100: '#ede6f6', 200: '#a19fcf', 500: '#703b95', 600: '#5c2d82', 700: '#442c84' },
        dark: { 700: '#2d1a54', 800: '#1a1530', 900: '#130f24' },
        g: { 1: '#f5f5f8', 2: '#d0d0da', 3: '#8a8a9a', 4: '#6a6a7a', 6: '#3a3a4a' },
      },
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      },
      maxWidth: {
        container: '1140px',
      },
    },
  },
  plugins: [],
};
