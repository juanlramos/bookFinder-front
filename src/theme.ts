import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0F172A",
      paper: "#1E293B",
    },
    primary: {
      main: "#1D4ED8",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#66768E",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#F8FAFC",
      secondary: "#94A3B8",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
