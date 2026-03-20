/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#F5A623',
          light: '#FFB74D',
          dark: '#E65100',
        },
        navy: {
          DEFAULT: '#0B1F4D',
          dark: '#0D1833',
          card: '#0B1F4D',
          mid: '#1676D2',
        },
        brand: {
          spartan: '#1676D2',
          circuit: '#28A7F7',
          teal: '#28A7F7',
        },
        body: '#5E6673',
        secondary: '#5E6673',
        bg: {
          light: '#F7F8FA',
          card: '#FFFFFF',
          border: '#E6EAF0',
        }
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
