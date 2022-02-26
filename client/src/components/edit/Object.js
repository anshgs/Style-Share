import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";

// Objects for OBJ files
const Object = (props) => {
  return (
    // set the object to the parsed OBJ data
    <TransformControls mode="translate">
      <primitive object={props.data}/>
    </TransformControls>
  );
}

export { Object };
