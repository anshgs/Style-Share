import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { NavBar } from "../components/util/NavBar";

const UploadPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        signIn={false}
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
          </Box>
          <Divider orientation="vertical" sx={{ minHeight: "90vh" }} />
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Typography
              sx={{ alignSelf: "center", margin: "5px" }}
              variant="h4"
            >
              Style Preview
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", flex: 1 }}>
          <Button
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
          </Button>
          <Divider orientation="vertical" sx={{ minHeight: "5vh" }} />
          <Button
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
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { UploadPage };
