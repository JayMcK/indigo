import { createTheme } from "@material-ui/core";

const IPurple = "#99154E";
const IYellow = "#FFC93C";
const IWhite = "#FFDDCC";

export default createTheme({
  palette: {
    common: {
      purple: IPurple,
      yellow: IYellow,
      white: IWhite,
    },
    primary: {
      main: IPurple,
    },
    secondary: {
      main: IYellow,
    },
  },
  typography: {
    h1: {
      fontFamily: "Acme",
      textTransform: "uppercase",
      color: IPurple,
      fontSize: "6rem",
    },
    h2: {
      fontFamily: "Acme",
      textTransform: "uppercase",
      color: IYellow,
      fontSize: "3rem",
    },
    h3: {
      fontFamily: "Acme",
      textTransform: "uppercase",
      color: IPurple,
      fontSize: "2.5rem",
    },
    h4: {
      fontFamily: "Acme",
      color: IWhite,
      fontSize: "1.5rem",
    },
    subtitle2: {
      fontFamily: "Acme",
      color: IWhite,
      fontSize: "1rem",
    },
    searchButton: {
      color: "#000",
      textTransform: "none",
      fontSize: "1.5rem",
      fontFamily: "Acme",
      backgroundColor: IYellow,
      borderRadius: 0,
      height: 50,
      "&:hover": {
        backgroundColor: IPurple,
        color: IWhite,
      },
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: IWhite,
        fontSize: "1.5rem",
        fontFamily: "Acme",
      },
    },
    MuiInput: {
      root: {
        color: IYellow,
        fontWeight: 300,
        fontFamily: "Acme",
        fontSize: "1.5rem",
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${IYellow}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${IYellow}`,
        },
      },
    },
  },
});
