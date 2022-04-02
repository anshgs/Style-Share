import { Box, Typography } from "@mui/material";
import { NavBar } from "../components/util/NavBar";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { NavMenu } from "../components/util/NavMenu";
import React from "react";

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
      <NavBar
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        signIn={true}
      />
      <NavMenu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Box>
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
