export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#07090f",
        ink: "#f5f7fb",
        panel: "#101522",
        line: "#252b3a",
        neon: "#42f4d7",
        signal: "#ff3d81",
        amber: "#ffc857"
      },
      boxShadow: {
        glow: "0 0 32px rgba(66, 244, 215, 0.18)"
      }
    }
  },
  plugins: []
};
