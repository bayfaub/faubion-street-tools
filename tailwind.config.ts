import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'pampas': "#f7f4f2",
      'pigeon-post': '#b0c6d9',
      'san-juan': '#2a4365',
    }
  },
  plugins: [],
} satisfies Config;
