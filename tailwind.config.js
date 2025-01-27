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
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          // Tambahkan custom style dengan hover
          ".hover-scale": {
            "@apply transition transform hover:scale-105": {}, // Tambahkan efek scale dengan hover
          },
        },
        ["responsive", "hover"] // Tambahkan varian hover atau responsive
      );
    },
  ],
};
