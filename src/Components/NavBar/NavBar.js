import React, { useEffect, useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";
import { Home, LocalOffer as About, Menu } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  appBarTransparent: {
    backgroundColor: "inherit",
    boxShadow: "none",
    transition: "all 0.3s",
    color: "#f5f5f5",
  },
  appBarOpacity: {
    backgroundColor: "rgba(255, 255, 255,0.9)",
    boxShadow: "none",
    transition: "all 0.3s",
    color: "black",
  },
  horizontalList: {
    display: "flex",
    flexDirection: "row",
  },
  menuButton: {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    },
  },
  iconColorLight: {
    color: "white",
  },
  iconColorDark: {
    color: "black",
  },
});

const selectLogo = (name) => {
  if (name === "Pradžia") return <Home />;
  // if (name === "Paslaugos") return <About />;
};

const selectLink = (name) => {
  if (name === "Pradžia") return `/`;
};

const handleDrawerClick = (name, setOpenMenu) => {
  if (setOpenMenu) setOpenMenu();
 
};

const MenuButtons = ({
  mobile = false,
  classes,
  colorChange = false,
  setDrawer = false,
  history
}) => {
  return (
    <div>
      <List className={mobile ? null : classes.horizontalList}>
        {["Pradžia"].map((item, index) => {
          return (
            <ListItem
              key={index}
              className={classes.menuButton}
              button
              onClick={() => history.push('/')}
            >
              <ListItemIcon
                className={
                  colorChange ? classes.iconColorLight : classes.iconColorDark
                }
              >
                {selectLogo(item)}
              </ListItemIcon>
              <ListItemText>
                <Typography style={{ fontFamily: '"Inter", sans-serif' }}>
                  {item}
                </Typography>
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

const NavBar = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width: 1180px)");
  const [data, setData] = useState({
    appBarColor: "appBarTransparent",
    openMenu: false,
  });
  const history = useHistory();

  useEffect(() => {
    addListeners();
  }, []);

  const addListeners = () => {
    windowScroll();
  };

  const windowScroll = () => {
    window.addEventListener("scroll", handleScrollChange);
  };

  const handleScrollChange = () => {
    if (window.scrollY > 20) {
      setData({ ...data, appBarColor: "appBarOpacity" });
    } else {
      setData({ ...data, appBarColor: "appBarTransparent" });
    }
  };

  const setOpenMenu = () => {
    setData({ ...data, openMenu: !data.openMenu });
  };

  return (
    <AppBar position="fixed" className={classes[data.appBarColor]}>
      <Box width="80%" m="auto">
        <Toolbar>
          <Typography variant="h3">LUYE</Typography>
          <Box ml="auto" display={matches ? "none" : null}>
            <MenuButtons
              classes={classes}
              colorChange={
                data.appBarColor === "appBarTransparent" ? true : false
              }
              history={history}
            />
          </Box>
          <Box ml="auto" display={matches ? null : "none"}>
            <Button onClick={setOpenMenu}>
              <Menu
                style={
                  data.appBarColor === "appBarTransparent"
                    ? { color: "white" }
                    : null
                }
                fontSize="large"
              />
            </Button>
          </Box>

          <SwipeableDrawer
            disableDiscovery={true}
            anchor="right"
            open={data.openMenu}
            onClose={setOpenMenu}
            onOpen={setOpenMenu}
          >
            <Box minWidth="300px">
              <MenuButtons
                mobile={true}
                classes={classes}
                setDrawer={setOpenMenu}
              />
            </Box>
          </SwipeableDrawer>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default NavBar;
