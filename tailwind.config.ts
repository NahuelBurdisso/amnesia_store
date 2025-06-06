import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        bodoni: ["Bodoni Moda", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "ripple-1": "ripple 4s ease-out infinite",
        "ripple-1-delayed": "ripple 4s ease-out infinite 0.5s",
        "ripple-1-late": "ripple 4s ease-out infinite 1s",
        "ripple-2": "ripple 5s ease-out infinite 2s",
        "ripple-2-delayed": "ripple 5s ease-out infinite 2.8s",
        "ripple-3": "ripple 6s ease-out infinite 4s",
        "ripple-3-delayed": "ripple 6s ease-out infinite 4.7s",
        "ripple-3-late": "ripple 6s ease-out infinite 5.4s",
        "ripple-dynamic":
          "rippleDynamic var(--duration, 4s) cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite",
        "ripple-fast":
          "rippleFast var(--duration, 3s) cubic-bezier(0.33, 0.66, 0.66, 1) infinite",
        "ripple-slow":
          "rippleSlow var(--duration, 5s) cubic-bezier(0.15, 0.36, 0.35, 0.84) infinite",
      },
      keyframes: {
        ripple: {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(8)",
            opacity: "0",
          },
        },
        rippleDynamic: {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
            borderWidth: "2px",
          },
          "30%": {
            opacity: "0.8",
            borderWidth: "1px",
          },
          "70%": {
            opacity: "0.3",
            borderWidth: "0.5px",
          },
          "100%": {
            transform: "scale(var(--ripple-scale, 8))",
            opacity: "0",
            borderWidth: "0.25px",
          },
        },
        rippleFast: {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
            borderWidth: "1.5px",
          },
          "50%": {
            opacity: "0.6",
            borderWidth: "0.75px",
          },
          "100%": {
            transform: "scale(var(--ripple-scale, 6))",
            opacity: "0",
            borderWidth: "0.25px",
          },
        },
        rippleSlow: {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
            borderWidth: "2.5px",
          },
          "20%": {
            opacity: "0.9",
            borderWidth: "1.5px",
          },
          "60%": {
            opacity: "0.4",
            borderWidth: "0.75px",
          },
          "100%": {
            transform: "scale(var(--ripple-scale, 10))",
            opacity: "0",
            borderWidth: "0.2px",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
