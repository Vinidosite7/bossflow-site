/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070A12",
        panel: "#0B1020",
        card: "#0F1730",
        stroke: "rgba(255,255,255,0.10)",
        text: "#EAF0FF",
        muted: "rgba(234,240,255,0.72)",
        brand: "#6D5EF6",
        brand2: "#22D3EE",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.10), 0 20px 60px rgba(0,0,0,0.55)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
