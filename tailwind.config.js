/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "templates/**/*.php",
    "config/**/*.php",
    "./*.php",
    "./src/**/*.{html,js,jsx,vue,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        // DEFAULT: "1rem",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1400px",
        xxxl: "1600px",
      },
    },
    screens: {
      xs: "0px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
      xxxl: "1920px",
      lgr: { max: "1023px" },
      xlr: { max: "1279px" },
      xxlr: { max: "1535px" },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      aspectRatio: {
        "4/2": "4 / 2",
        "5/2": "5 / 2",
      },
      colors: {
        primary: {
          black: {
            95: "#17191c",
            90: "#17191C",
            80: "#252528",
            55: "#454B54",
            50: "#737D8C",
            45: "#9DA4AF",
            44: "#a8a7a6",
            40: "#E6E9EF",
            30: "#E3E5E8",
            25: "#E3E5E8",
            20: "#F4F6FA",
            15: "#9da4af",
            10: "#ededed",
          },
          accent: {
            100: "#E42038",
            10: "#FCE9EB",
          },
          hover: {
            100: "#2086E4",
            50: "#D5E5F6",
            10: "#e8f3fc",
          },
        },
      },
      gridTemplateAreas: {
        "tabs-desktop": [
          "images images info-1",
          "images images info-2",
          "images images info-3",
        ],
        "quiz-control-mob": ["prev next", "pagination pagination"],
        "quiz-control-desktop": ["prev pagination next"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
