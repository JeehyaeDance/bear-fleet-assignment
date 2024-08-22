import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    success: {
      main: "#00D15E",
    },
  },
  typography: {
    h1: {
      fontWeight: 300,
      fontSize: 96,
      letterSpacing: -1.5,
      lineHeight: 7,
    },
    h2: {
      fontWeight: 300,
      fontSize: 60,
      letterSpacing: -0.5,
      lineHeight: 4.5,
    },
    h3: {
      fontWeight: 400,
      fontSize: 48,
      letterSpacing: 0,
      lineHeight: 3.5,
    },
    h4: {
      fontWeight: 600,
      fontSize: 34,
      letterSpacing: 0.25,
      lineHeight: 2.625,
    },
    h5: {
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: 0,
      lineHeight: 2,
    },
    h6: {
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: 0.15,
      lineHeight: 2,
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: 16,
      letterSpacing: 0.15,
      lineHeight: 1.75,
    },
  },
});
