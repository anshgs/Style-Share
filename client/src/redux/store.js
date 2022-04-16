import { createStore, combineReducers } from "redux";

const imageStyleInitState = {
  imageS: [],
};

const imageContentInitState = {
  imageC: [],
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
  switch(action.type){
    case "setS":
      return {
        ...state,
        imageS: [action.styleImageBLOB, action.styleImageTAG],
      };
    default:
      return state
  }
};

const inputContentImage = (state = imageContentInitState, action) => {
  //console.log(action.image, "content");
  switch(action.type){
    case "setC":
      return {
        ...state,
        imageC: [action.contentImageBLOB, action.contentImageTAG],
      };
    default:
      return state
  }
};

const store = createStore(
  combineReducers({inputStyleImage: inputStyleImage, inputContentImage: inputContentImage}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { setContentImage, setStyleImage, store };
