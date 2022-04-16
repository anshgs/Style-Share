// placeholder for webpage to stylize image
import * as tf from "@tensorflow/tfjs";
import { useState } from "react";
import { useSelector } from "react-redux";
tf.ENV.set("WEBGL_PACK", false);

const Styler = () => {
  const reduxCURL = useSelector((state) => state.inputContentImage);
  const imageCURL = reduxCURL.imageC;
  console.log("reduxCURL", imageCURL);


  const reduxSURL = useSelector((state) => state.inputStyleImage);
  const imageSURL = reduxSURL.imageS;
  console.log("reduxSURL", imageSURL);

  var styleImObj = new Image();
  var contentImObj = new Image();  
  styleImObj.src = imageSURL[0];
  contentImObj.src = imageCURL[0];
  const canvas = document.createElement("canvas");
  canvas.width = 1500;
  canvas.height = 1000;
  // const tensor = style(contentImObj, styleImObj, 0.5, canvas);

  // tf.browser.toPixels(tensor, canvas).then(() => {
  //   console.log("???");
  // });
  //console.log(tensor);

  return (
    <div>
      {imageSURL[1]}
      {imageCURL[1]}
    </div>
  );
};

const style = async (styleImg, contentImg, ratio, canvas) => {
  const styleNet = await tf.loadGraphModel("saved_model_style_js/model.json");
  const transformNet = await tf.loadGraphModel(
    "saved_model_transformer_separable_js/model.json"
  );

  let bottleneck = await tf.tidy(() => {
    return styleNet.predict(
      tf.browser.fromPixels(styleImg).toFloat().div(tf.scalar(255)).expandDims()
    );
  });

  await tf.nextFrame();
  const identityBottleneck = await tf.tidy(() => {
    return styleNet.predict(
      tf.browser
        .fromPixels(contentImg)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims()
    );
  });
  const styleBottleneck = bottleneck;
  bottleneck = await tf.tidy(() => {
    const styleBottleneckScaled = styleBottleneck.mul(tf.scalar(ratio));
    const identityBottleneckScaled = identityBottleneck.mul(
      tf.scalar(1.0 - ratio)
    );
    return styleBottleneckScaled + identityBottleneckScaled;
  });
  styleBottleneck.dispose();
  identityBottleneck.dispose();

  await tf.nextFrame();
  const stylized = await tf.tidy(() => {
    return transformNet
      .predict([
        tf.browser
          .fromPixels(contentImg)
          .toFloat()
          .div(tf.scalar(255))
          .expandDims(),
        bottleneck,
      ])
      .squeeze();
  });
  await tf.browser.toPixels(stylized, canvas);
  bottleneck.dispose(); // Might wanna keep this around
  return stylized;
  // const firstStyle = styleNet.predict(
  //   tf.browser.fromPixels(styleImg).toFloat().div(tf.scalar(255)).expandDims()
  // );
  // const secondStyle = styleNet.predict(
  //   tf.browser.fromPixels(styleImg).toFloat().div(tf.scalar(255)).expandDims()
  // );
  // const bottleneck = ratio * firstStyle + (1 - ratio) * secondStyle;
  // const stylized = transformNet
  //   .predict([
  //     tf.browser
  //       .fromPixels(contentImg)
  //       .toFloat()
  //       .div(tf.scalar(255))
  //       .expandDims(),
  //     bottleneck,
  //   ])
  //   .squeeze();
  // return tf.browser.toPixels(stylized);
};

export { Styler };
