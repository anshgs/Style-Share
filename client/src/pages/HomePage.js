import { Box } from "@mui/material";
import { NavBar } from "../components/util/NavBar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wpp: {
    minHeight: "95vh",
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
  return (
    <Box className={classes.wpp}>
      <NavBar />
    </Box>
  );
};

export { HomePage };
