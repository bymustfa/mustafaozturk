module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlack: "#0e0f10",
        green: "#25ca7f",
      },
      fontFamily: {
        inconsolata: [
          "Inconsolata",
          "monospace",
          "Source Code",
          "Source Code Variable",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
