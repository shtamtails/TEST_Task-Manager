import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          padding: "0px",
          backgroundColor: "#fff",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});
