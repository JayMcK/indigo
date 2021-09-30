import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
}));

export default function MovieGallery({
  search,
  setSingleMovieString,
  setDialogOpen,
}) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [foundSearch, setFoundSearch] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  const URL = `http://www.omdbapi.com/?s=${search}&type=movie&apikey=${apiKey}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((result) => {
        setFoundSearch(result.data.Search);
      })
      .then((error) => console.log(error));
  }, [URL]);

  const handleSelect = (e) => {
    if (e.target.alt !== undefined) {
      let query = e.target.alt.replace(/[\W_]+/g, "+");
      setSingleMovieString(query);
      setDialogOpen(true);
    }
  };

  return (
    <Grid item>
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
                  <Button disableRipple onClick={(e) => handleSelect(e)}>
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className={classes.image}
                    />
                  </Button>
                </Grid>
              )
          )}
      </Grid>
    </Grid>
  );
}
