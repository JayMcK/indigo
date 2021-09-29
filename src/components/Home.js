import react, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          {/* ----- HERO BLOCK ----- */}
          <Grid container direction="column"></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
