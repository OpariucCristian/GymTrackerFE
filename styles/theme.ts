import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#e73213",
      100: "#e73213",
      200: "#e73213",
      300: "#e73213",
      400: "#e73213",
      500: "#e73213",
      600: "#e73213",
      700: "#e73213",
      800: "#8c200e",
      900: "#e73213",
    },
    secondary: {
      500: "#9dbeb7",
      800: "#7f9993",
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: "primary.500",
          color: "primary.50",
          text: "primary.50",
          endColor: "primary.50",
        },
        secondary: {
          bg: "secondary.500",
          color: "secondary.50",
          _text: "secondary.50",
        },
      },
    },
  },
});
