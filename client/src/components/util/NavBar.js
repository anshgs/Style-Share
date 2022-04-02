import { AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const NavBar = ({ drawerOpen, setDrawerOpen, signIn }) => {
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
        {signIn && (
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
        )}
        {signIn && (
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
        )}
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };
