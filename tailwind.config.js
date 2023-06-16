/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f9f9f9",
        black: "#000",
        white: "#fff",
        darkgray: "#b3b3b3",
        "studio-lightmode-midseparator-dee3eb": "#dee3eb",
        "studio-darkmode-exportbg-1a202e": "#1a202e",
        "studio-darkmode-maincta-457eff": "#457eff",
        darkslategray: "#4b4b4b",
      },
      fontFamily: {
        roboto: "Roboto",
        "source-code-pro": "'Source Code Pro'",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "1rem",
      xl: "1.25rem",
      smi: "0.81rem",
      "7xl": "1.63rem",
      "29xl": "3rem",
      "5xl": "1.5rem",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
