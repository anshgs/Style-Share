import { ListItem, ListItemText, Drawer, List } from "@mui/material";

const NavMenu = ({ drawerOpen, setDrawerOpen }) => {
  return (
    <Drawer
      open={drawerOpen}
      anchor="left"
      onClose={() => setDrawerOpen(false)}
      variant="persistent"
      sx={{ zIndex: 1600, "div:nth-child(1)": { position: "relative" } }}
    >
      <List>
        <ListItem button onClick={(e) => (window.location = "/")}>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button onClick={(e) => (window.location = "/edit")}>
          <ListItemText primary="Create Scene" />
        </ListItem>

        <ListItem button onClick={(e) => (window.location = "/upload")}>
          <ListItemText primary="Style Images" />
        </ListItem>

        <ListItem button onClick={(e) => (window.location.href = " https://style-transfer-backend-ix3zc64heq-uc.a.run.app/gallery")}>
          <ListItemText primary="View Gallery" />
        </ListItem>
      </List>
    </Drawer>
  );
};
export { NavMenu };
