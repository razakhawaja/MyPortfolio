// const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        transparent: "transparent",
        // current: "currentColor",
        blueGray: colors.slate,
        yellow: "#ca8a04",
        // primary: {
        //   light: "#f7f7f7",
        //   lightP2: "#f9f9ff",
        //   lightP3: "#f7f9fc",
        //   DEFAULT: "#49a521",
        //   50: "#d5e6cf",
        //   100: "#6ad83b",
        //   200: "#5cd02a",
        //   300: "#52ba25",
        //   400: "#49a521",
        //   500: "#40901d",
        //   600: "#367b19",
        //   700: "#2d6514",
        // },
        primary: {
          hover: "#292524",
          DEFAULT: "#44403c",
        },
        secondary: {
          DEFAULT: "#075e40",
          light: "#effef9",
          50: "#cafbeb",
          100: "#a5f9dc",
          200: "#5cf4c0",
          300: "#37f1b2",
          400: "#0ecc8b",
          500: "#0ca772",
          600: "#098259",
          700: "#075e40",
          800: "#043927",
          900: "#03271a",
        },
        error: {
          DEFAULT: "#D42154",
          100: "#FEEAEA",
          200: "#F8BACB",
          300: "#AA174C",
          400: "#7F0D41",
        },
        success: {
          DEFAULT: "#50CC2F",
          200: "#c2ffb0",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D2D2D6",
          400: "#C1C1C6",
          500: "#B0B0B7",
          600: "#A0A0A8",
          700: "#8F8F99",
          800: "#7F7F8B",
          900: "#6B6A78",
          A100: "#5B5B6A",
          A200: "#4C4C5C",
          A400: "#3D3D4E",
          A700: "#2E2E40",
          A900: "#202033",
        },
        warmGray: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        brown: {
          50: "#EFEBE9",
        },
        dark: {
          60: "#3A3A42",
          70: "#313139",
          80: "#282830",
          90: "#181818",
          DEFAULT: "#181818",
          contrastText: "#BDBDBD",
        },
        markdown: {
          codeText: "#c7254e",
          codeBg: "#f9f2f4",
        },
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  plugins: [],
};
