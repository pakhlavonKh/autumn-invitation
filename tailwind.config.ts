import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'autumn-warm': '#C97B63',
        'autumn-rust': '#A63A50',
        'autumn-gold': '#FFD6A5',
        'autumn-brown': '#6B4226',
        'autumn-cream': '#FFF1E6',
        'autumn-linen': '#F6E7D8',
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        script: ["Cormorant Garamond", "serif"],
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
