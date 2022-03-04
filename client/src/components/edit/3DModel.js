import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";

// Objects for OBJ files
const OBJModel = (props) => {
  // used to link the transform controls to the mesh
  // and keep track of when the mesh is being transformed
  const mesh = useRef();
  const [isMoving, setIsMoving] = useState(false);

  // we want to keep track of whether or not the mesh is being transformed so
  // the mesh does not get deselected if the transform was on top of the mesh
  const handleClick = (e) => {
    if ((props.id == props.selected) && (!isMoving)) {
      props.setSelected(null);
    } else {
      props.setSelected(props.id);
    }
  }

  // determine when the mesh should display the transform controls,
  // which is only when it is the selected mesh
  const drawTransform = (e) => {
    if (props.id == props.selected) {
      return <TransformControls object={mesh}
                                mode={props.transformMode}
                                onMouseDown={() => setIsMoving(true)}
                                onMouseUp={() => setIsMoving(false)} />;
    }

    return <></>;
  }

  return (
    // set the object to the parsed OBJ data
    <>
      <primitive ref={mesh} object={props.data} onClick={handleClick}/>;
      {drawTransform()}
    </>
  );
}

export { OBJModel };
