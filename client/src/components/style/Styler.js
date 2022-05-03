// placeholder for webpage to stylize image
import * as tf from "@tensorflow/tfjs";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { NavBar } from "../util/NavBar";
import { NavMenu } from "../util/NavMenu";
import { DownloadButton } from "../util/SaveButton";

tf.ENV.set("WEBGL_PACK", false);

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

const Styler = () => {
  const canvasRef = useRef();

  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const reduxCURL = useSelector((state) => state.inputContentImage);
  const reduxSURL = useSelector((state) => state.inputStyleImage);

  const style = (styleImg, contentImg, ratio) => {
    let firstStyle;
    let identityStyle;
    let styleCombo;
    tf.tidy( () => {
    tf.loadGraphModel("saved_model_style_js/model.json")
    .then(function(styleModel) {
      firstStyle = styleModel.predict(
        tf.browser
        .fromPixels(styleImg)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims()
      )

      identityStyle = styleModel.predict(
        tf.browser
        .fromPixels(contentImg)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims()
      )

      styleCombo = tf.add(firstStyle.mul(tf.scalar(ratio)), identityStyle.mul(tf.scalar(1-ratio)));
      firstStyle.dispose();
      identityStyle.dispose();
      console.log(styleCombo);
    tf.loadGraphModel("saved_model_transformer_separable_js/model.json").then(function(transformModel){
      console.log("loaded transform model");
      tf.browser.toPixels(transformModel.predict([
        tf.browser
          .fromPixels(contentImg)
          .toFloat()
          .div(tf.scalar(255))
          .expandDims(),
        styleCombo,
      ]).squeeze(), canvasRef.current).then(function(arr){console.log(arr)});
      console.log("Done");
    });
    });
  });
  };

  useEffect(() => {
    const imageCURL = reduxCURL.imageC;
    console.log("reduxCURL", imageCURL);
    const imageSURL = reduxSURL.imageS;
    console.log("reduxSURL", imageSURL);

    var styleImObj = new Image();
    var contentImObj = new Image();
    styleImObj.src = imageSURL[0];
    contentImObj.src = imageCURL[0];

    var style_ratio = 400.0 / styleImObj.height;
    styleImObj.width = styleImObj.width * style_ratio;
    styleImObj.height = styleImObj.height * style_ratio;

    var content_ratio = 400.0 / contentImObj.height;
    contentImObj.width = contentImObj.width * content_ratio;
    contentImObj.height = contentImObj.height * content_ratio;

    style(styleImObj, contentImObj, 0.5);
  });

  const saveBlob = (function() {
   const a = document.createElement('a');
     document.body.appendChild(a);
     a.style.display = 'none';
     return function saveData(blob, fileName) {
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
     };
   }());

  const downloadImage = () => {
    canvasRef.current.toBlob(blob => {
      saveBlob(blob, "image.png");
    })
  }

  return (
    <Box className={classes.wpp}>
      <NavBar
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        signIn={false}
      />
      <NavMenu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <div style={{textAlign: "center", padding: 25,}}>
        <canvas style={{padding: 25, background: "white", backgroundClip: "padding-box",}} ref={canvasRef}/>
      </div>
      <div style={{textAlign: "center", padding: 10}}>
        <DownloadButton saveCanvas={downloadImage}/>
      </div>
    </Box>
  );
};

export { Styler };
