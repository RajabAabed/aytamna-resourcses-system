/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "node_modules/preline/dist/*.js"],

  theme: {
    extend: {
      fontFamily: {
        IBM: ["IBM Plex Sans Arabic", "sans-serif"],
      },

      colors: {
        primary: {
          100: "#E9EBEE", //Light
          200: "#DEE2E6", //Light hover
          300: "#BAC2CB", //Light active
          400: "#223B58", //normal
          500: "#1F354F", //normal hover
          600: "#1B2F46", //normal active
          700: "#1A2C42", //dark
          800: "#142335", //dark hover
          900: "#0F1B28", //dark active
        },
        secondary: {
          100: "#EDF8FB", //Light
          200: "#E4F4F8", //Light hover
          300: "#C7E9F1", //Light active
          400: "#4AB8D2", //normal
          500: "#43A6BD", //normal hover
          600: "#3B93A8", //normal active
          700: "#388A9E", //dark
          800: "#2C6E7E", //dark hover
          900: "#21535E", //dark active
        },
        success: {
          100: "#ECF4E6", //Light
          200: "#E3EED9", //Light hover
          300: "#C4DDB0", //Light active
          400: "#419000", //normal
          500: "#3B8200", //normal hover
          600: "#347300", //normal active
          700: "#316C00", //dark
          800: "#275600", //dark hover
          900: "#1D4100", //dark active
        },
        danger: {
          100: "#FBE6E6", //Light
          200: "#F9DADA", //Light hover
          300: "#F2B2B2", //Light active
          400: "#D40808", //normal
          500: "#BF0707", //normal hover
          600: "#AA0606", //normal active
          700: "#9F0606", //dark
          800: "#7F0505", //dark hover
          900: "#5F0404", //dark active
        },
        alert: {
          100: "#FDF6E6", //Light
          200: "#FCF1D9", //Light hover
          300: "#F9E2B0", //Light active
          400: "#EBA000", //normal
          500: "#D49000", //normal hover
          600: "#BC8000", //normal active
          700: "#B07800", //dark
          800: "#8D6000", //dark hover
          900: "#6A4800", //dark active
        },
        grey: {
          100: "#FEFEFE", //Light
          200: "#FDFDFD", //Light hover
          300: "#FBFBFB", //Light active
          400: "#F3F2F2", //normal
          500: "#DBDADA", //normal hover
          600: "#C2C2C2", //normal active
          700: "#B6B6B6", //dark
          800: "#929191", //dark hover
          900: "#6D6D6D", //dark active
        },
      },
      fontSize: {
        h1: "42px",
        h2: "38px",
        h3: "32px",
        h4: "26px",
        title: "22px",
        subTitle: "18px",
        body: "16px",
        description: "14px",
        badges: "12px",
      },

      boxShadow: {
        modal: "0 0 2px 0 rgba(194, 194, 194,1)",
        dasboard: "0 0 2px 0 rgba(0, 0, 0, 0.25)",
        dasboardItem: "0 0 2px 0 ",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
