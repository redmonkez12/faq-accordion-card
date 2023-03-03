/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "3xl": ["2rem", {
          lineHeight: "2.5rem",
        }],
      },
      padding: {
        "34": "8.25rem",
      },
      colors: {
        black: "#1E1F36",
        blackMedium: "#4B4C5F",
        gray: "#E8E8EA",
        grayDark: "#787887",
        orange: "#F47B56",
      },
      boxShadow: {
        card: "0 50px 50px -20px rgba(53, 18, 122, 0.497159)",
      },
    },
  },
  plugins: [],
}
