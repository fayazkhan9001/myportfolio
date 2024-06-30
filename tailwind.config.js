/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A53DFF",
        secondry: "#EDD8FF",
        lightGrey: "#556070",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      boxShadow: {
        "multi-color":
          "inset 0 0 0 rgba(233, 66, 53, 0.8), inset -10px 0 2px rgba(66, 133, 244, 0.8), inset -15px 0 7px rgba(52, 163, 88, 0.8)",
      },
    },
  },
  plugins: [],
};
