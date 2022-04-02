import { Edit, GridHelper } from "./Edit.js";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls, Environment } from "@react-three/drei";
import { Scene } from "./Scene";
import { UI } from "./UI";
import { OBJModel } from "./3DModel";
import React from "react";

describe("Edit Page", () => {
  const wrapper = shallow(<Edit />);

  // make sure editor contains both a UI and a Canvas
  describe("Editor contains UI and Canvas", () => {
    it("expects a UI", () => {
      expect(wrapper.find(UI)).to.have.length(1);
    });

    it("expects a Canvas", () => {
      expect(wrapper.find(Canvas)).to.have.length(1);
    });
  });

  // make sure the Canvas has the expected components
  describe("Canvas contains expected components", () => {
    it("expects a Camera", () => {
      expect(wrapper.find(Canvas).find(OrbitControls)).to.have.length(1);
    });

    it("expects a Scene component", () => {
      expect(wrapper.find(Canvas).find(Scene)).to.have.length(1);
    });

    it("expects a GridHelper", () => {
      expect(wrapper.find(Canvas).find(GridHelper)).to.have.length(1);
    });
  });

  // make sure the Scene behaves appropriately
  describe("Scene behaves appropriately", () => {
    it("expects Scene to start with no objects", () => {
      expect(wrapper.find(Canvas).find(Scene).find(OBJModel)).to.have.length(0);
    });
  });
});
