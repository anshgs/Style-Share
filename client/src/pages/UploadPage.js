import { Box, Button, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { NavBar } from "../components/util/NavBar";

const UploadPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [image1, setImage1] = useState([]);
  const [image2, setImage2] = useState([]);
  const [image1URL, setImage1URL] = useState([]);
  const [image2URL, setImage2URL] = useState([]);

  const onImage1Change = (e) => {
    setImage1([e.target.files]);
  };

  const onImage2Change = (e) => {
    setImage2([e.target.files]);
  };

  useEffect(() => {
    if (image1.length !== 1) {
      return;
    }
    console.log(image1[0][0]);
    setImage1URL([URL.createObjectURL(image1[0][0])]);
  }, [image1]);

  useEffect(() => {
    if (image2.length !== 1) {
      return;
    }
    setImage2URL([URL.createObjectURL(image2[0][0])]);
  }, [image2]);

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
              src={image1URL[0]}
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
              src={image2URL[0]}
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
              htmlFor="image1"
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
              name="image1"
              id="image1"
              accept="image/*"
              onChange={onImage1Change}
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
              htmlFor="image2"
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
              name="image2"
              id="image2"
              accept="image/*"
              onChange={onImage2Change}
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
