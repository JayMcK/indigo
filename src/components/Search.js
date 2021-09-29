import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";

import MovieDialog from "./commonComponents/MovieDialog";

const useStyles = makeStyles((theme) => ({
  searchBox: {
    backgroundColor: "#000",
    minHeight: "60em",
  },
  image: {
    height: "35em",
    width: "25em",
    marginTop: "1em",
    marginBottom: "1em",
    marginLeft: "1em",
    marginRight: "1em",
    [theme.breakpoints.down("sm")]: {
      height: "18em",
      width: "13em",
      marginLeft: 0,
      marginRight: 0,
    },
  },
  goToSearchButton: {
    ...theme.typography.searchButton,
    width: "100%",
    textTransform: "uppercase",
  },
}));

export default function Search({
  foundSearch,
  setFoundSearch,
  singleMovieString,
  setSingleMovieString,
  searchMoviesString,
  setSearchMoviesString,
  foundMovie,
  setFoundMovie,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const [dialogOpen, setDialogOpen] = useState(false);

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const apiKey = process.env.REACT_APP_API_KEY;

  const URL = `http://www.omdbapi.com/?s=${searchMoviesString}&type=movie&apikey=${apiKey}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((result) => {
        setFoundSearch(result.data.Search);
      })
      .then((error) => console.log(error));
  }, [URL, setFoundSearch]);

  const handleSelect = (e) => {
    let query = e.target.alt.replace(/[\W_]+/g, "+");
    setSingleMovieString(query);
    setDialogOpen(true);
  };

  return (
    <Grid item className={classes.searchBox}>
      <Grid container direction="column">
        <Grid item align="center" style={{ marginTop: "1em" }}>
          <Typography variant="h5">
            Titles including "{searchMoviesString}"
          </Typography>
        </Grid>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          justifyContent="center"
          alignItems={matchesSM ? "center" : undefined}
        >
          {foundSearch &&
            foundSearch.map(
              (movie) =>
                movie.Poster !== "N/A" && (
                  <Grid item key={movie.imdbID}>
                    <Button onClick={(e) => handleSelect(e)}>
                      <img
                        src={movie.Poster}
                        alt={movie.Title}
                        className={classes.image}
                      />
                    </Button>
                  </Grid>
                )
            )}
          {foundSearch === undefined ? (
            <Grid item style={{ marginTop: "2em" }}>
              <Typography variant="h5">
                No search results found. Please search again
              </Typography>
            </Grid>
          ) : null}
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/"
            className={classes.goToSearchButton}
            onClick={() => setSearchMoviesString("")}
          >
            go home
          </Button>
        </Grid>
      </Grid>
      <Dialog fullScreen open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <MovieDialog
          singleMovieString={singleMovieString}
          setDialogOpen={setDialogOpen}
          foundMovie={foundMovie}
          setFoundMovie={setFoundMovie}
        />
      </Dialog>
    </Grid>
  );
}
