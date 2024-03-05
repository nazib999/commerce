/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        circle: "circle 20s linear alternate infinite",
        square: "square 15s linear alternate infinite",
        rec: "rec 20s linear alternate infinite",
      },
      keyframes: {
        circle: {
          "100%": { transform: "translate(90vw, -50vh)" },
        },
        square: {
          "100%": { transform: "translate(90vw, 100vh)" },
        },
        rec: {
          "100%": { transform: "translate(90vw, -50vh)" },
        },
      },
    },
  },
  plugins: [],
};
