"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
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
  },
});

export default theme;
