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

export const modalStyle = {
  position: "absolute" as "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};
