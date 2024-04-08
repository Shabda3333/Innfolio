/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#1f1f1f",
      "dark-grey": "#323232",
      white: "#FFFFFF",
      "light-grey": "#E5E5E5",
      cyan: "#31C8B6",
      blue: "#134B9E",
    },
    fontFamily: {
      "general-sans": ["GeneralSans", "sans-sarif"],
    },
  },
  plugins: [],
};
