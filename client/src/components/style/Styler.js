// placeholder for webpage to stylize image
import * as tf from '@tensorflow/tfjs';
tf.ENV.set('WEBGL_PACK', false); 

const Styler = () => {
  // console.log("aaaa");
  // const styleImg = new ImageData(1);
  // styleImg.data[0] = 100;
  // styleImg.data[1] = 150;
  // styleImg.data[2] = 200;
  // styleImg.data[3] = 255;

  // const contentImg = new ImageData(1);
  // contentImg.data[0] = 100;
  // contentImg.data[1] = 150;
  // contentImg.data[2] = 200;
  // contentImg.data[3] = 255;
  // console.log("reached");
  // const retIm = style(styleImg, contentImg, 0.5)
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Style</h2>
      <div> help idk what's going on :)</div>
      {/* <img srd={retIm} alt='notloading'></img> */}
    </main>
  );
};

const style = (styleImg, contentImg, ratio) => {
  const styleNet = tf.loadGraphModel('saved_model_style_js/model.json');
  const transformNet = tf.loadGraphModel('saved_model_transformer_separable_js/model.json');

  const firstStyle = styleNet.predict(tf.browser.fromPixels(styleImg).toFloat().div(tf.scalar(255)).expandDims());
  const secondStyle = styleNet.predict(tf.browser.fromPixels(styleImg).toFloat().div(tf.scalar(255)).expandDims());
  const bottleneck = ratio*firstStyle + (1-ratio) * secondStyle;
  const stylized = transformNet.predict([tf.browser.fromPixels(contentImg).toFloat().div(tf.scalar(255)).expandDims(), bottleneck]).squeeze();
  return tf.browser.toPixels(stylized);
}

export { Styler };
