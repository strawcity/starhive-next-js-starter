import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5BC0BE", // Light blue
        secondary: "#3A506B", // Darker blue
        completed: "#a5e4c5", // Green for completed
        uncompleted: "#B0BEC5", // Grey for uncompleted
        step: "#e3ebee", // Grey for uncompleted
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
