/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A1128', // Dark Blue/Black for logo background
          neon: '#00FFD1', // Neon Green/Cyan for accents
          light: '#E6F3FF', // Light Blue for backgrounds
          text: '#1A1A1A', // Dark Grey for text
        },
      },
    },
  },
  plugins: [],
};