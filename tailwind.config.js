/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FFBE00",
        secondaryColor: "#AB8F5E",
        thirdColor: "#C1554D",
        textColor: "#522800",
        accentColor: "#B8B900",
        buttonColor: "#B8B900",
      },
    },
  },
  plugins: [],
};
