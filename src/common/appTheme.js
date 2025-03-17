import { createTheme } from "@mui/material/styles";

const AppTheme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Green
    },
    secondary: {
      main: "#BDBDBD", // Grey
    },
    background: {
      default: "#F5F5F5", // Light Grey Background
      paper: "#FFFFFF", // White Paper (Card Backgrounds)
    },
    text: {
      primary: "#333333", // Dark Grey for Text
      secondary: "#757575", // Lighter Grey for Subtext
    },
  },
  typography: {
    fontFamily: `"Roboto", "Arial", sans-serif`,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default AppTheme;
