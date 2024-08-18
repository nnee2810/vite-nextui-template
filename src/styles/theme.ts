import { NextUIPluginConfig, ThemeColors } from "@nextui-org/react"

export const colors: Partial<ThemeColors> = {
  primary: {
    100: "#ADEFD5",
    200: "#82E1BD",
    300: "#57D1A4",
    400: "#2BBE8A",
    500: "#00A76F",
    600: "#009661",
    700: "#008353",
    800: "#006D44",
    900: "#005534",
    DEFAULT: "#00A76F",
  },
}

export const theme: NextUIPluginConfig = {
  themes: {
    light: {
      colors,
    },
  },
}
