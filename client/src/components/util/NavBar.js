import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Menu,
  MenuItem,
  ListItem,
  ListItemText,
  Drawer,
  List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const NavBar = ({ drawerOpen, setDrawerOpen }) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{ backgroundColor: "#3ea6fa" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={(e) => {
            setDrawerOpen(!drawerOpen);
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1, margin: "5px" }}
        >
          3D Style Transfer
        </Typography>
        <Button
          color="inherit"
          sx={{
            textTransform: "none",
            fontSize: "24px",
            // backgroundColor: "#3ea6fa",
            marginRight: "10px",
            // color: "white",
          }}
        >
          Sign In
        </Button>
        <Button
          color="inherit"
          sx={{
            textTransform: "none",
            fontSize: "24px",
            // backgroundColor: "#055a9e",
            // color: "white",
          }}
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };
