import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#1A1F2C",
        foreground: "#ffffff",
        gold: {
          DEFAULT: "#FFD700",
          light: "#FFF1AA",
          dark: "#B8860B",
        },
        primary: {
          DEFAULT: "#403E43",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#333333",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#555555",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "rgba(26, 31, 44, 0.9)",
          foreground: "#ffffff",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "matrix-fall": "matrixFall 20s linear infinite",
        "tilt": "tilt 10s infinite linear",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        matrixFall: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;