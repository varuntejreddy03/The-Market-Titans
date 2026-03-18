/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A0F2C',
          mid: '#111A3E',
          card: '#162047',
          light: '#162047',
          dark: '#07091E',
        },
        gold: {
          DEFAULT: '#D4A017',
          light: '#F0C040',
          muted: '#8C6A10',
          dark: '#A07810',
        },
        bg: { light: '#F4F6FA' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        heading: ['"DM Serif Display"', 'serif'],
        body: ['Epilogue', 'sans-serif'],
        label: ['"Barlow Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
