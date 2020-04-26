import React from "react";
import {
  Box,
  Typography,
  Button,
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import TopWave from "../../Assets/Wave/Top";
import Image1 from "../../Assets/privacy-policy.svg";
import Image2 from "../../Assets/community1.png";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ededed",
  },
  sectionName: {
    backgroundColor: "white",
  },
  card: {
    maxWidth: "450px",
    minWidth: "350px",
    margin: "10px",
    "&:hover": {
      transition: "all 0.3s",
      transform: "scale(1.02)",
    },
  },
});

const cardContentInfo = [
  {
    header: "Kurti testą",
    content: "Čia galite sukurti testą, kurį galės spręsti kiti vartootjai",
    image: Image2,
    link: '/createTest'
  },
  {
    header: "Spręsti tęstus",
    content: "Čia galite pasirinkti spręsti testą iš esamų",
    image: Image2,
    link: '/solveTest'
  },
];

const Cards = ({ header, content, image, link, classes }) => {
  const history = useHistory();
  return (
    <Card className={classes.card}>
      <CardMedia style={{ minHeight: "200px" }} title={header} image={image} />
      <CardContent>
        <Typography variant="h4">{header}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>history.push(link)}>Pradėti</Button>
      </CardActions>
    </Card>
  );
};

const Services = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} id="services">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.sectionName}
        height="15vh"
      >
        <Typography variant="h3" align="center">
          Mūsų paslaugos
        </Typography>
      </Box>
      <TopWave color="#ffff" />
      <Box
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
        alignItems="flex-start"
        minHeight="400px"
      >
        {cardContentInfo.map((item, index) => (
          <Cards
            key={index}
            header={item.header}
            content={item.content}
            image={item.image}
            link={item.link}
            classes={classes}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Services;
