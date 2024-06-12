import { nextui } from "@nextui-org/react"
import type { Config } from "tailwindcss"
import { theme } from "./src/styles/theme"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(theme)],
}
export default config
