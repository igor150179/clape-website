import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Brandbook v2 — sistema cromático oficial
        "clape-dark": "#333B41", // Grafite CLAPE
        "clape-dark-deep": "#1A1D1F", // Preto Forno
        "clape-cream": "#F7F4EF", // Off-white Farinha
        "clape-mist": "#E4E1DC", // Cinza Névoa (apoio)
        "clape-orange": "#F47920", // Laranja Chama
        "clape-amber": "#F89C1B", // Laranja Brasa
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "clape-gradient":
          "linear-gradient(135deg, #333B41 0%, #1A1D1F 55%, rgba(244, 121, 32, 0.14) 100%)",
        "clape-image-fallback":
          "linear-gradient(135deg, #1A1D1F 0%, #333B41 45%, rgba(244, 121, 32, 0.28) 100%)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
    },
  },
};

export default config;
