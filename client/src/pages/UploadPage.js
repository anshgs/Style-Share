import { Box, Button, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { NavBar } from "../components/util/NavBar";
import { setImage } from "../redux/store";
import { useDispatch } from "react-redux";
import { Redirect, useNavigate } from "react-router-dom";

const UploadPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [imageC, setimageC] = useState([]);
  const [imageS, setimageS] = useState([]);
  const [imageCURL, setimageCURL] = useState([]);
  const [imageSURL, setimageSURL] = useState([]);
  const [styleReady, setStyleReady] = useState(false);

  const onimageCChange = (e) => {
    if (e.target.files.length !== 1) {
      setimageC([]);
      setimageCURL([]);
    } else {
      setimageC([e.target.files]);
    }
  };

  const onimageSChange = (e) => {
    if (e.target.files.length !== 1) {
      setimageS([]);
      setimageSURL([]);
    } else {
      setimageS([e.target.files]);
    }
  };

  useEffect(() => {
    if (imageC.length !== 1) {
      return;
    }
    setimageCURL([URL.createObjectURL(imageC[0][0])]);
  }, [imageC]);

  useEffect(() => {
    if (imageS.length !== 1) {
      return;
    }
    setimageSURL([URL.createObjectURL(imageS[0][0])]);
  }, [imageS]);

  useEffect(() => {
    setStyleReady(imageC.length === 1 && imageS.length === 1);
  }, [imageC, imageS]);

  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        signIn={true}
      ></NavBar>
      {styleReady && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "column",
            flex: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{ flex: 1, margin: "5px", backgroundColor: "#32CD32" }}
            onClick={(e) => {
              // dispatch(
              //   setImage([
              //
              //   ])
              // );
              dispatch(
                setImage(
                  imageCURL[0],
                  imageSURL[0],
                  <img alt="" key="content" src={imageCURL[0]} />,
                  <img alt="" key="style" src={imageSURL[0]} />
                )
              );
              console.log([
                imageCURL[0],
                imageSURL[0],
                <img alt="" key="content" src={imageCURL[0]} />,
                <img alt="" key="style" src={imageSURL[0]} />,
              ]);
              nav("/style");
            }}
          >
            Activate!
          </Button>
        </Box>
      )}
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
        <Box sx={{ display: "flex", flexDirection: "row", flex: 1 }}>
          {/* <Button
            color="inherit"
            sx={{
              textTransform: "none",
              fontSize: "24px",
              backgroundColor: "#3ea6fa",
              margin: "10px",
              // color: "white",
              flex: 1,
            }}
          >
            Upload Content Image
          </Button> */}
          <Box sx={{ flex: 1 }}>
            <label
              htmlFor="imageC"
              style={{
                alignSelf: "center",
                display: "block",
                margin: "0 auto",
                marginTop: "15px",
                border: "1px solid #ccc",
                padding: "6px 12px",
                cursor: "pointer",
                maxWidth: "300px",
                borderRadius: "10px",
                backgroundColor: "#3ea6fa",
                fontFamily: "Fredericka the Great",
                textAlign: "center",
              }}
            >
              Upload Content Image
            </label>
            <input
              type="file"
              name="imageC"
              id="imageC"
              accept="image/*"
              onChange={onimageCChange}
              style={{ display: "none" }}
            />
          </Box>
          <Divider orientation="vertical" sx={{ minHeight: "7.5vh" }} />
          {/* <Button
            color="inherit"
            sx={{
              textTransform: "none",
              fontSize: "24px",
              backgroundColor: "#3ea6fa",
              margin: "10px",
              // color: "white",
              flex: 1,
            }}
          >
            Upload Style Image
          </Button> */}
          <Box sx={{ flex: 1 }}>
            <label
              htmlFor="imageS"
              style={{
                alignSelf: "center",
                display: "block",
                margin: "0 auto",
                marginTop: "15px",
                border: "1px solid #ccc",
                padding: "6px 12px",
                cursor: "pointer",
                maxWidth: "300px",
                borderRadius: "10px",
                backgroundColor: "#3ea6fa",
                fontFamily: "Fredericka the Great",
                textAlign: "center",
              }}
            >
              Upload Style Image
            </label>
            <input
              type="file"
              name="imageS"
              id="imageS"
              accept="image/*"
              onChange={onimageSChange}
              style={{
                display: "none",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { UploadPage };
