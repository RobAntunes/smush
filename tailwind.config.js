/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Monochromatic cream palette
        'cream': {
          50: '#fdfcfa',   // Lightest - main bg
          100: '#f8f6f2',  // Very light - cards
          200: '#f0ebe3',  // Light - sections
          300: '#e8e1d5',  // Medium light - borders
          400: '#d4c9b8',  // Medium - subtle elements
          500: '#b5a490',  // Dark cream - secondary text
          600: '#8a7a68',  // Darker - body text
          700: '#6b5d4f',  // Deep taupe - headings
          800: '#4a3f35',  // Darkest - emphasis
        },
        // Legacy aliases (will redirect to cream)
        'smush-alabaster': '#f8f6f2',
        'smush-white': '#fdfcfa',
        'smush-black': '#4a3f35',
        'smush-grey': '#8a7a68',
        'smush-green': '#6b5d4f',  // Now just a darker cream
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"General Sans"', 'sans-serif'],
      },
      fontSize: {
        hero: '5.5rem',
        display: '3.5rem',
        eyebrow: '0.75rem',
      },
      maxWidth: {
        container: '1400px',
      },
      spacing: {
        section: '150px',
      },
      borderRadius: {
        luxury: '0px', // Square corners for luxury aesthetic
      },
    },
  },
  plugins: [],
};
