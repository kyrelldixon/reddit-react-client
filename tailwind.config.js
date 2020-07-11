module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    colors: {
      orange: "#fd4500",
      gray: {
        lightest: "#fbfcfe",
        lighter: "#f4f5fa",
        light: "#898ea2",
        normal: "#808080",
        dark: "#464855",
      },
      white: "#fff",
      indigo: {
        light: "666ee8",
        dark: "8a91ff",
      },
    },
    fontFamily: {
      body: [`"Muli"`, "san-serif"],
      heading: [`"Poppins"`, "san-serif"],
    },
  },
  variants: {},
  plugins: [],
};
