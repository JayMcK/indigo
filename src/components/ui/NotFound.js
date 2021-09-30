import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";

import movieClapper from "../../assets/movieClapper.svg";
import heroBackground from "../../assets/heroBackground.png";

const useStyles = makeStyles((theme) => ({
  oopsImage: {
    height: "12em",
    marginTop: "1.5em",
  },
  linkText: {
    textDecoration: "none",
    fontWeight: "bold",
  },
  homeButton: {
    ...theme.typography.searchButton,
    textTransform: "uppercase",
    backgroundColor: theme.palette.common.yellow,
    color: "#000",
    "&:hover": {
      backgroundColor: theme.palette.common.purple,
      color: theme.palette.common.white,
    },
  },
  background: {
    backgroundImage: `url(${heroBackground})`,
    [theme.breakpoints.up("md")]: {
      backgroundAttachment: "fixed",
    },
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function NotFound() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
        className={classes.background}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? "1em" : 0,
            marginRight: matchesMD ? "1em" : 0,
          }}
          align="center"
        >
          {/* ----- Info Block ----- */}
          <Typography variant="h2" style={{ fontSize: "5rem" }}>
            404
          </Typography>
          <Typography variant="h3">
            Sorry, we couldn't find that page...
          </Typography>
        </Grid>
        <Grid item align="center">
          <img
            src={movieClapper}
            alt="movie clapper open"
            className={classes.oopsImage}
          />
        </Grid>
        <Grid item style={{ marginTop: "2em", marginBottom: "3em" }}>
          <Button
            component={Link}
            to="/"
            className={classes.homeButton}
            variant="contained"
          >
            Go Home
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
