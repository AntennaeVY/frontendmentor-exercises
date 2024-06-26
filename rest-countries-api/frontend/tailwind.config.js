/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "very-light-gray": "hsl(0, 0%, 98%)",
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue": "hsl(207, 26%, 17%)",
      },
    },
    fontFamily: {
      nunito: '"Nunito Sans"',
    },
  },
  darkMode: "selector",
  plugins: [],
};
