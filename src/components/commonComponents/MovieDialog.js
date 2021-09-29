import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";

import IconButton from "@material-ui/core/IconButton";

import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: "none",
    color: theme.palette.common.yellow,
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  specialText: {
    color: theme.palette.common.white,
  },
  goToSearchButton: {
    ...theme.typography.searchButton,
    width: "100%",
    textTransform: "uppercase",
  },
  dialogBackground: {
    backgroundColor: "#000",
    minHeight: "100vh",
  },
  image: {
    border: `10px solid ${theme.palette.common.purple}`,
    height: "50em",
    [theme.breakpoints.down("sm")]: {
      height: "18em",
      width: "13em",
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

export default function MovieDialog({
  singleMovieString,
  setDialogOpen,
  foundMovie,
  setFoundMovie,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const apiKey = process.env.REACT_APP_API_KEY;

  const URL = `http://www.omdbapi.com/?t=${singleMovieString}&type=movie&apikey=${apiKey}`;

  useEffect(() => {
    console.log(URL);
    axios
      .get(URL)
      .then((result) => {
        setFoundMovie(result.data);
      })
      .then((error) => console.log(error));
  }, [URL, setFoundMovie]);

  return (
    <DialogContent>
      <Grid item align="center" className={classes.dialogBackground}>
        <Grid container direction="column">
          <Grid item align="right">
            <IconButton onClick={() => setDialogOpen(false)}>
              <CloseIcon color="primary" fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item style={{ marginRight: "5em", marginLeft: "5em" }}>
            <Typography variant="h1" className={classes.title}>
              {foundMovie && foundMovie.Title}
            </Typography>
          </Grid>
          <Grid item style={{ marginBottom: "2em" }}>
            <Typography variant="h3" color="secondary">
              {foundMovie && foundMovie.Year !== "N/A" ? foundMovie.Year : ""}
            </Typography>
          </Grid>
          <Grid container direction={matchesMD ? "column" : "row"}>
            {foundMovie && foundMovie.Poster !== "N/A" ? (
              <Grid item lg>
                <img
                  src={foundMovie.Poster}
                  alt={foundMovie.Title}
                  className={classes.image}
                />
              </Grid>
            ) : null}
            <Grid item lg container direction="column" justifyContent="center">
              <Grid
                item
                align="center"
                style={{ marginLeft: "1em", marginRight: "1em" }}
              >
                {foundMovie && foundMovie.Plot !== "N/A" ? (
                  <Grid
                    item
                    align="center"
                    style={{ marginTop: "2em", marginBottom: "2em" }}
                  >
                    <Typography variant="subtitle2" color="primary">
                      <span className={classes.specialText}>
                        {foundMovie.Plot}
                      </span>
                    </Typography>
                  </Grid>
                ) : null}
                {foundMovie && foundMovie.imdbRating !== "N/A" ? (
                  <Typography variant="subtitle2" color="primary">
                    imdbRating:{" "}
                    <span className={classes.specialText}>
                      {foundMovie.imdbRating}
                    </span>
                  </Typography>
                ) : null}
                {foundMovie && foundMovie.Released !== "N/A" ? (
                  <Typography variant="subtitle2" color="primary">
                    Release Date:{" "}
                    <span className={classes.specialText}>
                      {foundMovie.Released}
                    </span>
                  </Typography>
                ) : null}
                {foundMovie && foundMovie.Runtime !== "N/A" ? (
                  <Typography variant="subtitle2" color="primary">
                    Runtime:{" "}
                    <span className={classes.specialText}>
                      {foundMovie.Runtime}
                    </span>
                  </Typography>
                ) : null}
                {foundMovie && foundMovie.Genre !== "N/A" ? (
                  <Typography variant="subtitle2" color="primary">
                    Genre:{" "}
                    <span className={classes.specialText}>
                      {foundMovie.Genre}
                    </span>
                  </Typography>
                ) : null}
                {foundMovie && foundMovie.Director !== "N/A" ? (
                  <Typography variant="subtitle2" color="primary">
                    Director:{" "}
                    <span className={classes.specialText}>
                      {foundMovie.Director}
                    </span>
                  </Typography>
                ) : null}
                {foundMovie && foundMovie.Writer !== "N/A" ? (
                  <Typography variant="subtitle2" color="primary">
                    Writer:{" "}
                    <span className={classes.specialText}>
                      {foundMovie.Writer}
                    </span>
                  </Typography>
                ) : null}
                {foundMovie && foundMovie.Actors !== "N/A" ? (
                  <Typography variant="subtitle2" color="primary">
                    Actors:{" "}
                    <span className={classes.specialText}>
                      {foundMovie.Actors}
                    </span>
                  </Typography>
                ) : null}
                {foundMovie && foundMovie.Language !== "N/A" ? (
                  <Typography variant="subtitle2" color="primary">
                    Language:{" "}
                    <span className={classes.specialText}>
                      {foundMovie.Language}
                    </span>
                  </Typography>
                ) : null}
                {foundMovie && foundMovie.Awards !== "N/A" ? (
                  <Typography variant="subtitle2" color="primary">
                    Awards:{" "}
                    <span className={classes.specialText}>
                      {foundMovie.Awards}
                    </span>
                  </Typography>
                ) : null}
                {foundMovie && foundMovie.BoxOffice !== "N/A" ? (
                  <Typography variant="subtitle2" color="primary">
                    BoxOffice:{" "}
                    <span className={classes.specialText}>
                      {foundMovie.BoxOffice}
                    </span>
                  </Typography>
                ) : null}
                {foundMovie && foundMovie.Production !== "N/A" ? (
                  <Typography variant="subtitle2" color="primary">
                    Production:{" "}
                    <span className={classes.specialText}>
                      {foundMovie.Production}
                    </span>
                  </Typography>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ marginTop: "3em" }}>
            <Button
              className={classes.goToSearchButton}
              onClick={() => setDialogOpen(false)}
            >
              Close
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </DialogContent>
  );
}
