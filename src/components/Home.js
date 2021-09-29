import react, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon from "@material-ui/icons/Search";

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
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [titleSearch, setTitleSearch] = useState("");

  const handleSearch = (e) => {
    setTitleSearch(e.target.value);
    console.log("titlesearch", titleSearch);
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
                  value={titleSearch}
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
                >
                  Search movies
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>{/* ----- Movies Block ----- */}</Grid>
      </Grid>
    </Grid>
  );
}
