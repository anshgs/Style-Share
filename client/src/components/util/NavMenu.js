import { ListItem, ListItemText, Drawer, List } from "@mui/material";

const NavMenu = ({ drawerOpen, setDrawerOpen }) => {
  console.log(drawerOpen);

  return (
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
  );
};
export { NavMenu };
