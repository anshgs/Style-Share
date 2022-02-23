// placeholder for webpage to stylize image
import * as tf from '@tensorflow/tfjs';
tf.ENV.set('WEBGL_PACK', false); 

const Styler = () => {
  const styleNet = tf.loadGraphModel('saved_model_style_js/model.json');
  const transformNet = tf.loadGraphModel('saved_model_transformer_separable_js/model.json');

  const ratio = 0.5
  const firstStyle = styleNet.predict(tf.browser.fromPixels(styleImg).toFloat().div(tf.scalar(255)).expandDims());
  const secondStyle = styleNet.predict(tf.browser.fromPixels(styleImg).toFloat().div(tf.scalar(255)).expandDims());
  const bottleneck = ratio*firstStyle + (1-ratio) * secondStyle;
  const stylized = transformNet.predict([tf.browser.fromPixels(contentImg).toFloat().div(tf.scalar(255)).expandDims(), bottleneck]).squeeze();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Style</h2>
    </main>
  );
};


export { Styler };
