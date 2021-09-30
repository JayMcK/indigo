import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Dialog from "@material-ui/core/Dialog";

import SearchIcon from "@material-ui/icons/Search";

import MovieGallery from "./commonComponents/MovieGallery";
import MovieDialog from "./commonComponents/MovieDialog";

import heroBackground from "../assets/heroBackground.png";

const useStyles = makeStyles((theme) => ({
  heroBackground: {
    backgroundImage: `url(${heroBackground})`,
    minHeight: "50em",
    [theme.breakpoints.up("md")]: {
      backgroundAttachment: "fixed",
    },
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  searchButton: {
    ...theme.typography.searchButton,
    width: 240,
  },
  textField: {
    color: theme.palette.common.white,
  },
  textFieldGrid: {
    marginTop: "2em",
    marginBottom: "2em",
  },
  moviesContainer: {
    backgroundColor: "#000",
  },
  goToSearchButton: {
    ...theme.typography.searchButton,
    width: "100%",
    textTransform: "uppercase",
    marginTop: "2em",
    marginBottom: "2em",
  },
}));

export default function Home({
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

  const handleSearch = (e) => {
    setSearchMoviesString(e.target.value);
    console.log("moviesstring", searchMoviesString);
  };

  return (
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          {/* ----- HERO BLOCK ----- */}
          <Grid
            container
            direction="column"
            className={classes.heroBackground}
            justifyContent="center"
            alignItems={matchesSM ? "center" : undefined}
          >
            <Grid
              item
              style={{ marginLeft: matchesSM ? 0 : "5em" }}
              align={matchesSM ? "center" : undefined}
            >
              <Grid item>
                <Typography variant="h1">Indigo</Typography>
              </Grid>
              <Grid item>
                <Typography paragraph variant="h2">
                  For all things film
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h4"
                  paragraph
                  style={{
                    marginLeft: matchesSM ? "1em" : 0,
                    marginRight: matchesSM ? "1em" : 0,
                  }}
                >
                  Find out all the facts about your loved films
                </Typography>
              </Grid>
              <Grid item className={classes.textFieldGrid}>
                <TextField
                  id="movie search"
                  label="Enter movie title"
                  value={searchMoviesString}
                  onChange={handleSearch}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="secondary" fontSize="large" />
                      </InputAdornment>
                    ),
                  }}
                  color="primary"
                  classes={{ root: classes.textField }}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.searchButton}
                  component={Link}
                  to="/search"
                  disabled={searchMoviesString.length === 0}
                >
                  Search movies
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ----- "Love" Movies Block ----- */}
          <Grid
            container
            direction="column"
            className={classes.moviesContainer}
          >
            <Grid
              item
              style={{
                marginTop: "5em",
              }}
            >
              <Grid item align="center">
                <Typography variant="h5">Titles including "Love"</Typography>
              </Grid>
              <MovieGallery
                setSingleMovieString={setSingleMovieString}
                search="love"
                setDialogOpen={setDialogOpen}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ----- "Jungle" Movies Block ----- */}
          <Grid
            container
            direction="column"
            className={classes.moviesContainer}
          >
            <Grid
              item
              style={{
                marginLeft: "5em",
                marginTop: "5em",
                marginRight: "5em",
              }}
            >
              <Grid item align="center">
                <Typography variant="h5">Titles including "Jungle"</Typography>
              </Grid>
              <MovieGallery
                setSingleMovieString={setSingleMovieString}
                search="jungle"
                setDialogOpen={setDialogOpen}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ----- "Why" Movies Block ----- */}
          <Grid
            container
            direction="column"
            className={classes.moviesContainer}
          >
            <Grid
              item
              style={{
                marginLeft: "5em",
                marginTop: "5em",
                marginRight: "5em",
              }}
            >
              <Grid item align="center">
                <Typography variant="h5">Titles including "Why"</Typography>
              </Grid>
              <MovieGallery
                setSingleMovieString={setSingleMovieString}
                search="why"
                setDialogOpen={setDialogOpen}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ----- "Car" Movies Block ----- */}
          <Grid
            container
            direction="column"
            className={classes.moviesContainer}
          >
            <Grid
              item
              style={{
                marginLeft: "5em",
                marginTop: "5em",
                marginRight: "5em",
              }}
            >
              <Grid item align="center">
                <Typography variant="h5">Titles including "Car"</Typography>
              </Grid>
              <MovieGallery
                setSingleMovieString={setSingleMovieString}
                search="why"
                setDialogOpen={setDialogOpen}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ----- "Anime" Movies Block ----- */}
          <Grid
            container
            direction="column"
            className={classes.moviesContainer}
          >
            <Grid
              item
              style={{
                marginLeft: "5em",
                marginTop: "5em",
                marginRight: "5em",
              }}
            >
              <Grid item align="center">
                <Typography variant="h5">Titles including "Anime"</Typography>
              </Grid>
              <MovieGallery
                setSingleMovieString={setSingleMovieString}
                search="anime"
                setDialogOpen={setDialogOpen}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.moviesContainer}>
          <Button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={classes.goToSearchButton}
          >
            Search for more movies
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
