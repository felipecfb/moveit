import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: "#000000",

    background: "#F2F3F5",

    gray_line: "#DCDDE0",

    text: "#666666",
    text_highlight: "#BEB9FF",

    title: "#2E384D",

    red: "#E83F5B",

    green: "#4CD62B",

    blue: "#5965E0",
    blue_dark: "#4954B8",
    blue_twitter: "#2AA9E0",
  },
  styles: {
    global: {
      body: {
        bg: "background",
        color: "text",

        fontWeight: "400",
        fontSize: "1rem",
        fontFamily: "Inter, sans-serif",
      },
    },
  },
});
