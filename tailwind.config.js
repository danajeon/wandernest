/* @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',  // Ensure it includes the HTML template
    './src/**/*.{js,ts,jsx,tsx}', // Include React components
  ],
  theme: {
    extend: {
      fontFamily: {
        'dongle': ['Dongle', 'serif']
      },
      colors: {
        'wandernest-blue': '#B0E7FF',
        'wandernest-pink': '#E589D9',
        'wandernest-purple': '#BFCCFB',
      },
    },
  },
  plugins: [],
}

