import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: "#000",
    paddingTop: "1em",
    paddingBottom: "1em",
  },
  socialIcon: {
    height: "2em",
    marginLeft: "0.5em",
    marginRight: "0.5em",
    opacity: 0.8,
  },
  copyrightText: {
    opacity: 0.8,
    marginTop: "0.5em",
  },
}));

export default function Footer() {
  const classes = useStyles();

  const socialMedias = [
    {
      name: "instagram",
      href: "https://www.instagram.com/",
      icon: instagram,
    },
    {
      name: "facebook",
      href: "https://www.facebook.com/",
      icon: facebook,
    },
    {
      name: "twitter",
      href: "https://www.twitter.com/",
      icon: twitter,
    },
    {
      name: "youtube",
      href: "https://www.youtube.com/",
      icon: youtube,
    },
  ];

  return (
    <Grid item>
      <Grid container direction="column" className={classes.footerContainer}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {socialMedias.map((social) => (
            <Grid
              key={social.href}
              item
              component={"a"}
              href={social.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={social.icon}
                alt={`${social} logo`}
                className={classes.socialIcon}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item align="center">
          <Typography variant="subtitle2" className={classes.copyrightText}>
            © Jay McKenzie 2021
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
