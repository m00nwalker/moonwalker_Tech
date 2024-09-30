import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        robotMono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        electricBlue: '#00D1FF', // Electric Blue
        neonGreen: '#39FF14', // Neon green on hover effect
      },
    },
  },
  plugins: [],
};
export default config;
