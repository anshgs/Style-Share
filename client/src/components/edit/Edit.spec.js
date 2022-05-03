import { Scene } from "./Scene";
import { UI } from "./UI";
import { UploadButton } from "./UploadButton";
import { DeleteButton } from "./DeleteButton";
import { SaveStyleButton, SaveContentButton } from "../util/SaveButton";
import { SceneList } from './SceneList';
import { EnvironmentSelector } from './EnvironmentSelector';
import { TransformOptions } from './TransformOptions';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { OBJModel } from "./3DModel";
import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import configureStore from 'redux-mock-store';

describe("Edit Page", () => {
  // check editor scene
  describe("3D Editor Scene", () => {
    const wrapper = shallow(<Scene objects={[]}/>);

    it("expects scene to start with no objects", () => {
      expect(wrapper.find(OBJModel)).to.have.length(0);
    });
  });

  // check editor ui
  describe("3D Editor UI", () => {
    const wrapper = shallow(<UI/>);

    it("expects an upload and delete button", () => {
      expect(wrapper.find(UploadButton)).to.have.length(1);
      expect(wrapper.find(DeleteButton)).to.have.length(1);
    });

    it("expects a grid helper toggle", () => {
      expect(wrapper.find(FormControlLabel)).to.have.length(1);
    });

    it("expects a list of objects", () => {
      expect(wrapper.find(SceneList)).to.have.length(1);
    });

    it("expects drop-down options", () => {
      expect(wrapper.find(TransformOptions)).to.have.length(1);
      expect(wrapper.find(EnvironmentSelector)).to.have.length(1);
    });

    it("expects save buttons", () => {
      expect(wrapper.find(SaveContentButton)).to.have.length(1);
      expect(wrapper.find(SaveStyleButton)).to.have.length(1);
    });
  });
});
