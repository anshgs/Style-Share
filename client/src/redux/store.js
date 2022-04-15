import { createStore, combineReducers } from "redux";

const imageStyleInitState = {
  image: [],
};

const imageContentInitState = {
  image: [],
};

const setStyleImage = (styleImageBLOB, styleImageTAG) => {
  return {
    type: "setS",
    styleImageBLOB: styleImageBLOB,
    styleImageTAG: styleImageTAG,
  };
};

const setContentImage = (contentImageBLOB, contentImageTAG) => {
  return {
    type: "setC",
    contentImageBLOB: contentImageBLOB,
    contentImageTAG: contentImageTAG,
  };
};

const inputStyleImage = (state = imageStyleInitState, action) => {
  //console.log(action.image, "content");
  return {
    ...state,
    image: [action.styleImageBLOB, action.styleImageTAG],
  };
};

const inputContentImage = (state = imageContentInitState, action) => {
  //console.log(action.image, "content");
  return {
    ...state,
    image: [action.contentImageBLOB, action.contentImageTAG],
  };
};

const store = createStore(
  combineReducers({inputStyleImage: inputStyleImage, inputContentImage: inputContentImage}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { setContentImage, setStyleImage, store };
