import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import Divider from "@material-ui/core/Divider";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import heroBackground from "../../assets/heroBackground.png";
import actor from "../../assets/actor.svg";
import award from "../../assets/award.svg";
import calendar from "../../assets/calendar.svg";
import director from "../../assets/director.svg";
import genre from "../../assets/genre.svg";
import production from "../../assets/production.svg";
import sandClock from "../../assets/sandClock.svg";
import star from "../../assets/star.svg";
import translate from "../../assets/translate.svg";
import writer from "../../assets/writer.svg";
import dollarSymbol from "../../assets/dollarSymbol.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "3rem",
    textTransform: "none",
    fontFamily: "Josefin Sans",
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  goToSearchButton: {
    ...theme.typography.searchButton,
    width: "100%",
    textTransform: "uppercase",
    backgroundColor: theme.palette.common.yellow,
    color: "#000",
    "&:hover": {
      backgroundColor: theme.palette.common.purple,
      color: theme.palette.common.white,
    },
  },
  dialogBackground: {
    backgroundColor: "#000",
    backgroundImage: `url(${heroBackground})`,
    [theme.breakpoints.up("md")]: {
      backgroundAttachment: "fixed",
    },
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  image: {
    height: "50em",
    [theme.breakpoints.down("sm")]: {
      height: "18em",
      width: "13em",
      marginLeft: 0,
      marginRight: 0,
    },
  },
  icon: {
    width: "2.5em",
  },
  list: {
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  listMargin: {
    marginTop: "2em",
  },
  plot: {
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.25rem",
    },
  },
  divider: {
    backgroundColor: theme.palette.common.white,
    width: "5em",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
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

  const [isLoading, setIsLoading] = useState(false);

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const apiKey = process.env.REACT_APP_API_KEY;

  const URL = `https://www.omdbapi.com/?t=${singleMovieString}&type=movie&apikey=${apiKey}`;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(URL)
      .then((result) => {
        setFoundMovie(result.data);
        setIsLoading(false);
      })
      .then((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [URL, setFoundMovie]);

  return (
    <DialogContent className={classes.dialogBackground}>
      <Grid container direction="column">
        <Backdrop open={isLoading} className={classes.backdrop}>
          <CircularProgress color="inherit" size={100} />
        </Backdrop>
        <Grid item align="right">
          <IconButton onClick={() => setDialogOpen(false)}>
            <CloseIcon color="primary" fontSize="large" />
          </IconButton>
        </Grid>
        <Grid
          item
          align="center"
          style={{
            marginRight: matchesMD ? "1em" : "5em",
            marginLeft: matchesMD ? "1em" : "5em",
          }}
        >
          <Typography variant="h1" className={classes.title}>
            {foundMovie && foundMovie.Title}
          </Typography>
        </Grid>
        <Grid item align="center" style={{ marginBottom: "2em" }}>
          <Typography
            variant="h3"
            color="primary"
            style={{ fontSize: "1.5rem" }}
          >
            {foundMovie && foundMovie.Year !== "N/A" ? foundMovie.Year : ""}
          </Typography>
        </Grid>
        <Grid item>
          {/* --- Movie Block --- */}
          <Grid
            container
            direction={matchesMD ? "column" : "row"}
            alignItems="center"
          >
            {foundMovie && foundMovie.Poster !== "N/A" ? (
              <Grid item lg style={{ marginLeft: "2em" }}>
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
                {foundMovie && foundMovie.imdbRating !== "N/A" ? (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent={matchesMD ? "center" : "flex-start"}
                    className={classes.listMargin}
                  >
                    <Grid item>
                      <img src={star} alt="star" className={classes.icon} />
                    </Grid>
                    <Grid item>
                      <Divider className={classes.divider} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" className={classes.list}>
                        {foundMovie.imdbRating}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : null}
                {foundMovie && foundMovie.Released !== "N/A" ? (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent={matchesMD ? "center" : "flex-start"}
                    className={classes.listMargin}
                  >
                    <Grid item>
                      <img
                        src={calendar}
                        alt="calendar"
                        className={classes.icon}
                      />
                    </Grid>
                    <Grid item>
                      <Divider className={classes.divider} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" className={classes.list}>
                        {foundMovie.Released}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : null}
                {foundMovie && foundMovie.Runtime !== "N/A" ? (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent={matchesMD ? "center" : "flex-start"}
                    className={classes.listMargin}
                  >
                    <Grid item>
                      <img
                        src={sandClock}
                        alt="hour glass"
                        className={classes.icon}
                      />
                    </Grid>
                    <Grid item>
                      <Divider className={classes.divider} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" className={classes.list}>
                        {foundMovie.Runtime}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : null}
                {foundMovie && foundMovie.Genre !== "N/A" ? (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent={matchesMD ? "center" : "flex-start"}
                    className={classes.listMargin}
                  >
                    <Grid item>
                      <img src={genre} alt="djing" className={classes.icon} />
                    </Grid>
                    <Grid item>
                      <Divider className={classes.divider} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" className={classes.list}>
                        {foundMovie.Genre}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : null}
                {foundMovie && foundMovie.Director !== "N/A" ? (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent={matchesMD ? "center" : "flex-start"}
                    className={classes.listMargin}
                  >
                    <Grid item>
                      <img
                        src={director}
                        alt="director"
                        className={classes.icon}
                      />
                    </Grid>
                    <Grid item>
                      <Divider className={classes.divider} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" className={classes.list}>
                        {foundMovie.Director}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : null}
                {foundMovie && foundMovie.Writer !== "N/A" ? (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent={matchesMD ? "center" : "flex-start"}
                    className={classes.listMargin}
                  >
                    <Grid item>
                      <img src={writer} alt="writer" className={classes.icon} />
                    </Grid>
                    <Grid item>
                      <Divider className={classes.divider} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" className={classes.list}>
                        {foundMovie.Writer}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : null}
                {foundMovie && foundMovie.Actors !== "N/A" ? (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent={matchesMD ? "center" : "flex-start"}
                    className={classes.listMargin}
                  >
                    <Grid item>
                      <img src={actor} alt="actor" className={classes.icon} />
                    </Grid>
                    <Grid item>
                      <Divider className={classes.divider} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" className={classes.list}>
                        {foundMovie.Actors}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : null}
                {foundMovie && foundMovie.Language !== "N/A" ? (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent={matchesMD ? "center" : "flex-start"}
                    className={classes.listMargin}
                  >
                    <Grid item>
                      <img
                        src={translate}
                        alt="translate"
                        className={classes.icon}
                      />
                    </Grid>
                    <Grid item>
                      <Divider className={classes.divider} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" className={classes.list}>
                        {foundMovie.Language}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : null}
                {foundMovie && foundMovie.Awards !== "N/A" ? (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent={matchesMD ? "center" : "flex-start"}
                    className={classes.listMargin}
                  >
                    <Grid item>
                      <img src={award} alt="award" className={classes.icon} />
                    </Grid>
                    <Grid item>
                      <Divider className={classes.divider} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" className={classes.list}>
                        {foundMovie.Awards}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : null}
                {foundMovie && foundMovie.BoxOffice !== "N/A" ? (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent={matchesMD ? "center" : "flex-start"}
                    className={classes.listMargin}
                  >
                    <Grid item>
                      <img
                        src={dollarSymbol}
                        alt="dollar symbol"
                        className={classes.icon}
                      />
                    </Grid>
                    <Grid item>
                      <Divider className={classes.divider} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" className={classes.list}>
                        {foundMovie.BoxOffice}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : null}
                {foundMovie && foundMovie.Production !== "N/A" ? (
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent={matchesMD ? "center" : "flex-start"}
                    className={classes.listMargin}
                  >
                    <Grid item>
                      <img
                        src={production}
                        alt="production"
                        className={classes.icon}
                      />
                    </Grid>
                    <Grid item>
                      <Divider className={classes.divider} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" className={classes.list}>
                        {foundMovie.Production}
                      </Typography>
                    </Grid>
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
          {foundMovie && foundMovie.Plot !== "N/A" ? (
            <Grid
              item
              align="center"
              style={{
                marginTop: "4em",
                marginBottom: "2em",
                marginLeft: "1em",
                marginRight: "1em",
              }}
            >
              <Typography variant="subtitle2" className={classes.plot}>
                {foundMovie.Plot}
              </Typography>
            </Grid>
          ) : null}
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
    </DialogContent>
  );
}
