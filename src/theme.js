"use client";
import { createTheme } from "@mui/material/styles";
import { Playfair_Display, Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const playfairDispay = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#D5C8C8", // Customize this color
    },
    secondary: {
      main: "#dc004e", // Customize this color
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    playfair: {
      fontFamily: playfairDispay.style.fontFamily,
    },
  },
});

export default theme;
