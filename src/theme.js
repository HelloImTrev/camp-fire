import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#F76C6C',
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#FFFFFF",
      contrastText: "#acdce3"
    } 

  },
  typography: {
    campHeading: {
      fontFamily: "Open Sans",
      fontWeight: 300,
      fontSize: "25px"

    },
    fontFamily: [
      "Open Sans",
      "Work Sans"
    ]
  }
})