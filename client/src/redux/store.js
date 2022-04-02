import { createStore, combineReducers } from "redux";

const imageInitState = {
  image: [],
};

const setImage = (
  contentImageBLOB,
  styleImageBLOB,
  contentImageTAG,
  styleImageTAG
) => {
  return {
    type: "set",
    contentImageBLOB: contentImageBLOB,
    styleImageBLOB: styleImageBLOB,
    contentImageTAG: contentImageTAG,
    styleImageTAG: styleImageTAG,
  };
};

const inputImage = (state = imageInitState, action) => {
  //console.log(action.image, "content");
  return {
    ...state,
    image: [
      action.contentImageBLOB,
      action.styleImageBLOB,
      action.contentImageTAG,
      action.styleImageTAG,
    ],
  };
};

const store = createStore(
  inputImage,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { setImage, store };
