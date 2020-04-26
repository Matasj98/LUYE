import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import Image from "../../Assets/education.jpg";
import { HashLink as Link } from "react-router-hash-link";

const useStyles = makeStyles({
  introSection: {
    color: "white",
    lineHeight: "1.6",
    letterSpacing: "1px",
  },
  bgImage: {
    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <Box
      id="about"
      fluid="true"
      className={classes.bgImage}
      color="text.primary"
      height="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box maxWidth="800px">
        <Typography
          align="center"
          className={classes.introSection}
          variant="h3"
        >
          Sveiki, mes esame <span>LUYE</span>
        </Typography>
        <Typography
          className={classes.introSection}
          variant="h5"
          align="center"
        >
          Pasaulis tobulėja nuolat, todėl yra svarbu mokymosi priemonėms irgi
          neatsilikti nuo pasaulio tendencijų. LUYE įmonė kuria projektus
          mokykloms, universitetams ir kitoms edukacinėms institucijoms.
        </Typography>
      </Box>
      <Link
        smooth
        to="#contact"
        style={{ textDecoration: "none", color: "inherit" }}
      ></Link>
    </Box>
  );
};

export default About;
