module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#10c8ae",
        secondary: "#8B5CF6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
