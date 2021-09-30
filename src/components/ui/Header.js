import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import IconButton from "@material-ui/core/IconButton";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      minHeight: 48,
    },
  },
  appBar: {
    backgroundColor: "#000",
    boxShadow: "none",
  },
  headerLogo: {
    ...theme.typography.h3,
    marginLeft: "0.25em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  iconButton: {
    padding: 0,
    marginTop: "0.5em",
    marginBottom: "0.5em",
    marginLeft: "0.5em",
    marginRight: "0.5em",
  },
  logo: {
    width: "2.5em",
    height: "2.5em",
    [theme.breakpoints.down("sm")]: {
      width: "2em",
      height: "2em",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar disableGutters>
            <IconButton
              disableRipple
              className={classes.iconButton}
              component={Link}
              to="/"
            >
              <img src={logo} alt="company logo" className={classes.logo} />
              <Typography className={classes.headerLogo}>indigo</Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}
