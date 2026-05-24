import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#1C1917",
          900: "#FFFFFF",
          800: "#FFF7FB",
          700: "#FFECF6",
          600: "#FFDEF0",
          500: "#F5C8E5",
        },
        gold: {
          300: "#FFF7FB",
          400: "#FFDEF0",
          500: "#FFDEF0",
          600: "#FFDEF0",
          700: "#F5D0E8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FFDEF0 0%, #FFF5FA 60%, #FFDEF0 100%)",
        "hero-gradient":
          "radial-gradient(ellipse at 65% 0%, rgba(255,222,240,0.15) 0%, transparent 55%), linear-gradient(170deg, #FFFFFF 0%, #FFF7FB 100%)",
        "card-gradient": "linear-gradient(145deg, #FFF7FB 0%, #FFFFFF 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.65s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
