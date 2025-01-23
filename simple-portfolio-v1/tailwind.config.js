/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-primary": "url('/src/assets/images/bg-primary.png')",
        "bg-secondary": "url('/src/assets/images/bg-secondary.png')",
      },
      rotate: {
        15: "15deg",
        "-15": "-15deg",
      },
    },
  },
  plugins: [],
};
