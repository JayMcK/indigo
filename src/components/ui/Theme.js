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
    h3: {
      fontFamily: "Acme",
      textTransform: "uppercase",
      color: IPurple,
      fontSize: "2.5rem",
    },
  },
});
