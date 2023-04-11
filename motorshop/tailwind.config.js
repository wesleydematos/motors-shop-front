/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "400px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },

    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      xl: " 1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "2.75rem",
    },

    colors: {
      brand: {
        400: "#4529E6",
        300: "#5126EA",
        200: "#B0A6F0",
        100: "#EDEAFD",
      },

      grey: {
        1100: "#0B0D0D",
        1000: "#212529",
        900: "#495057",
        800: "#868E96",
        700: "#ADB5BD",
        600: "#CED4DA",
        500: "#DEE2E6",
        400: "#E9ECEF",
        300: "#F1F3F5",
        200: "#F8F9FA",
        100: "#FDFDFD",
      },

      alert: {
        300: "#CD2B31",
        200: "#FDD8D8",
        100: "#FFE5E5",
      },

      sucess: {
        300: "#18794E",
        200: "#CCEBD7",
        100: "#DDF3E4",
      },

      pink: {
        300: "#7D2A4D",
        200: "#C04277",
        100: "#E34D8C",
      },

      green: {
        300: "#153D2E",
        200: "#2A7D5F",
        100: "#349974",
      },

      purple: {
        600: "#30007D",
        500: "#36007D",
        400: "#5700E3",
        300: "#6200E3",
        200: "#6100FF",
        100: "#7000FF",
      },

      whiteFixed: "#FFFFFF",
    },

    extend: {
      fontFamily: {
        inter: "Inter, sans-serif",
        lexend: "Lexend, sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
