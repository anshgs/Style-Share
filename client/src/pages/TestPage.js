import { Box, Button, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { NavBar } from "../components/util/NavBar";
import { setContentImage, setStyleImage } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useNavigate } from "react-router-dom";

const TestPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const dispatch = useDispatch();
  const nav = useNavigate();

    
  const reduxCURL = useSelector((state) => state.inputContentImage);
  const imageCURL = reduxCURL.imageC;
  console.log("reduxCURL", imageCURL);


  const reduxSURL = useSelector((state) => state.inputStyleImage);
  const imageSURL = reduxSURL.imageS;
  console.log("reduxSURL", imageSURL);

  

  return (

    
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        signIn={true}
      ></NavBar>
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "row", flex: 12 }}>
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Typography
              sx={{ alignSelf: "center", margin: "5px" }}
              variant="h4"
            >
              Content Preview
            </Typography>
            <img
              alt=""
              src={imageCURL[0]}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
          <Divider orientation="vertical" sx={{ minHeight: "85vh" }} />
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Typography
              sx={{ alignSelf: "center", margin: "5px" }}
              variant="h4"
            >
              Style Preview
            </Typography>
            <img
              alt=""
              src={imageSURL[0]}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { TestPage };
