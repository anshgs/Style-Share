import {
  Box,
  Typography,
  Menu,
  MenuItem,
  ListItem,
  ListItemText,
  Drawer,
  List,
} from "@mui/material";
import { NavBar } from "../components/util/NavBar";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
const useStyles = makeStyles({
  wpp: {
    minHeight: "100vh",
    maxWidth: "100vw",
    backgroundImage: `url(${"./tempwpp.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    display: "flex",
    flexDirection: "column",
    fontFamily: "Fredericka the Great",
  },
});

const HomePage = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Box className={classes.wpp}>
      <NavBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Box>
        <Drawer
          open={drawerOpen}
          anchor="left"
          onClose={() => setDrawerOpen(false)}
          variant="persistent"
          sx={{ zIndex: 1600, "div:nth-child(1)": { position: "relative" } }}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>

            <ListItem button onClick={(e) => (window.location = "/style")}>
              <ListItemText primary="Style" />
            </ListItem>

            <ListItem button onClick={(e) => (window.location = "/edit")}>
              <ListItemText primary="Edit" />
            </ListItem>
          </List>
        </Drawer>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant={"h2"}
            sx={{
              color: "white",
              backgroundColor: "#3ea6fa",
              alignSelf: "center",
              padding: "15px",
              borderRadius: "25px",
              marginTop: "10vh",
            }}
          >
            Transfer styles on your favorite images
          </Typography>
          <Typography
            variant={"h3"}
            sx={{
              color: "white",
              backgroundColor: "#055a9e",
              alignSelf: "center",
              padding: "15px",
              borderRadius: "25px",
              marginTop: "5vh",
            }}
          >
            Sign up now for free
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { HomePage };
