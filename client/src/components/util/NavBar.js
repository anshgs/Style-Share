import { AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const NavBar = ({ drawerOpen, setDrawerOpen, signIn }) => {
  const handleSignin = () => {
    window.open("https://style-transfer-backend-ix3zc64heq-uc.a.run.app/login", '_blank', 'noopener,noreferrer');
  }

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
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };
