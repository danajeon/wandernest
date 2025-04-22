/* @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensure it includes the HTML template
    "./src/**/*.{js,ts,jsx,tsx}", // Include React components
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "wandernest-blue": "#B0E7FF",
        "wandernest-pink": "#E589D9",
        "wandernest-purple": "#BFCCFB",
      },
      animation: {
        fadeIn: "fadeIn .9s ease-in forwards",
        fadeOut: "fadeOut .9s ease-in forwards",
        slideUp: "slideUp .9s ease-in forwards"
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" },"70%": {opacity: "0"}, "100%": { opacity: "1" } },
        fadeOut: { "0%": { opacity: "1",top: "50%" },"70%": {opacity: "1",top: "50%"}, "80%": { opacity: "0",top: "33%" },"100%": {opacity: "0",top: "33%"} },
        slideUp: { "0%": { top: "50%" }, "100%": { top: "33%" } },
      },
    },
    plugins: [],
  },
};
