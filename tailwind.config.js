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
        darkslategray: "#4b4b4b",
        "studio-lightmode-midseparator-dee3eb": "#dee3eb",
        "studio-darkmode-exportbg-1a202e": "#1a202e",
        "studio-darkmode-maincta-457eff": "#457eff",
        slategray: "#576074",
      },
      fontFamily: {
        roboto: "Roboto",
        "source-code-pro": "'Source Code Pro'",
      },
      borderRadius: {
        "3xs": "10px",
        "2xs-5": "10.5px",
        "7xs-3": "5.3px",
      },
    },
    fontSize: {
      base: "1rem",
      xl: "1.25rem",
      smi: "0.81rem",
      "7xl": "1.63rem",
      "13xl": "2rem",
      "29xl": "3rem",
      "5xl": "1.5rem",
      "lgi-4": "1.21rem",
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
