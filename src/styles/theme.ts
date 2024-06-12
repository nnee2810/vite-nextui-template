import { NextUIPluginConfig, ThemeColors } from "@nextui-org/react"

export const colors: Partial<ThemeColors> = {
  primary: {
    100: "#FCDED1",
    200: "#FAB7A5",
    300: "#F18576",
    400: "#E35652",
    500: "#D1202B",
    600: "#B3172F",
    700: "#961030",
    800: "#790A2E",
    900: "#64062D",
    DEFAULT: "#D1202B",
  },
}

export const theme: NextUIPluginConfig = {
  themes: {
    light: {
      colors,
    },
  },
}
