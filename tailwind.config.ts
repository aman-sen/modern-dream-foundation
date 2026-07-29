import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   emerald: {
      //     DEFAULT: "#16A34A",
      //     50: "#EAFBF1",
      //     100: "#D3F5E0",
      //     400: "#34C264",
      //     500: "#16A34A",
      //     600: "#128740",
      //     700: "#0D6B33",
      //     900: "#063D1D",
      //   },
      //   sky: {
      //     DEFAULT: "#0284C7",
      //     50: "#E9F6FD",
      //     100: "#CFEBFA",
      //     400: "#38A6DE",
      //     500: "#0284C7",
      //     600: "#026CA3",
      //     700: "#025580",
      //   },
      //   sunrise: {
      //     DEFAULT: "#F97316",
      //     50: "#FFF3EA",
      //     100: "#FEE3CC",
      //     400: "#FB9245",
      //     500: "#F97316",
      //     600: "#D95F0B",
      //   },
      //   surface: "#FFFFFF",
      //   section: "#F8FAFC",
      //   ink: {
      //     DEFAULT: "#1F2937",
      //     soft: "#4B5563",
      //     faint: "#94A3B8",
      //   },
      // },

       colors: {
  emerald: {
    DEFAULT: "#6B21A8",
    50: "#FAF5FF",
    100: "#F3E8FF",
    400: "#C084FC",
    500: "#A855F7",
    600: "#9333EA",
    700: "#7E22CE",
    900: "#4C1D95",
  },
  sky: {
    DEFAULT: "#7C3AED",
    50: "#EDE9FE",
    100: "#DDD6FE",
    400: "#A78BFA",
    500: "#7C3AED",
    600: "#6D28D9",
    700: "#5B21B6",
  },
  sunrise: {
    DEFAULT: "#F97316",
    50: "#FFF3EA",
    100: "#FEE3CC",
    400: "#FB9245",
    500: "#F97316",
    600: "#D95F0B",
  },
  surface: "#FFFFFF",
  section: "#F8FAFC",
  ink: {
    DEFAULT: "#1F2937",
    soft: "#4B5563",
    faint: "#94A3B8",
  },
},

      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        warm: ["var(--font-newsreader)", "serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "2rem",
      },
      boxShadow: {
        soft: "0 4px 24px -6px rgba(15, 23, 42, 0.08)",
        lift: "0 20px 45px -12px rgba(22, 163, 74, 0.25)",
        glass: "0 8px 32px 0 rgba(31, 41, 55, 0.10)",
      },
      // backgroundImage: {
      //   "grad-primary": "linear-gradient(135deg, #16A34A 0%, #0284C7 100%)",
      //   "grad-warm": "linear-gradient(135deg, #F97316 0%, #16A34A 100%)",
      //   "grad-hero": "linear-gradient(180deg, rgba(6,20,15,0.15) 0%, rgba(6,20,15,0.75) 100%)",
      // },
       backgroundImage: {
  "grad-primary": "linear-gradient(135deg, #6B21A8 0%, #A855F7 100%)",
  "grad-warm": "linear-gradient(135deg, #F97316 0%, #A855F7 100%)",
  "grad-hero": "linear-gradient(180deg, rgba(20,10,40,0.15) 0%, rgba(20,10,40,0.75) 100%)",
},

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
