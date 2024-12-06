import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body_background: "#ecf3f1",
        primary:"#448c74",
        secondary:"#000000",
        light:"#ffffff"
      },
      
      
    },
    
    
  },
  darkMode:"media",
  plugins: [],
} satisfies Config;
