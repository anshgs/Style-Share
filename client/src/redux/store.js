import { createStore, combineReducers } from "redux";

const setContentImage = (setImage) => {
  return {
    type: "set",
    image: setImage,
  };
};

const setStyleImage = (setImage) => {
  return {
    type: "set",
    image: setImage,
  };
};

const contentImage = (state = [], action) => {
  return [action.image];
};
const styleImage = (state = [], action) => {
  return [action.image];
};

const store = createStore(
  combineReducers({ content: contentImage, style: styleImage })
);

export { setStyleImage, setContentImage, store };
