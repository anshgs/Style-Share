import { AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          3D Style Transfer
        </Typography>
        <Button color="inherit" sx={{ textTransform: "none" }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };
