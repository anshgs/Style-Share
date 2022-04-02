// placeholder for webpage to stylize image
import * as tf from "@tensorflow/tfjs";
import { useState } from "react";
import { useSelector } from "react-redux";
tf.ENV.set("WEBGL_PACK", false);

const Styler = async () => {
  const Images = useSelector((state) => state.image);
  var styleImObj = new Image();
  var contentImObj = new Image();
  styleImObj.src = Images[1];
  contentImObj.src = Images[0];
  const tensor = await style(contentImObj, styleImObj, 0.5);
  // const canvas = document.createElement("canvas");
  // canvas.width = tensor.shape.width;
  // canvas.height = tensor.shape.height;
  // tf.browser.toPixels(tensor, canvas).then(() => {
  //   console.log("???");
  // });
  //console.log(tensor);

  // return (
  //   <div>
  //     {Images[2]}
  //     {Images[3]}
  //   </div>
  // );
};

const style = async (styleImg, contentImg, ratio) => {
  const styleNet = await tf.loadGraphModel("saved_model_style_js/model.json");
  const transformNet = await tf.loadGraphModel(
    "saved_model_transformer_separable_js/model.json"
  );

  let bottleneck = await tf.tidy(() => {
    return this.styleNet.predict(
      tf.browser
        .fromPixels(this.styleImg)
        .toFloat()
        .div(tf.scalar(255))
        .expandDims()
    );
  });

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
