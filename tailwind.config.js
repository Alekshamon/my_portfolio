/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FEBE98",
        secondaryColor: "#FOCFBA",
        thirdColor: "#F2E9D9",
        textColor: "#464646",
        accentColor: "#F87472",
        buttonColor: "#DF7F83",
      },
    },
  },
  plugins: [],
};
