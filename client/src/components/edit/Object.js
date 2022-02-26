import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";

// temporary box for testing
const StyleBox = () => {
  // allow box color to be changed upon click
  const [color, setColor] = useState("hotpink");
  return (
    // attach transform controls (fixed to translate for now) to box
    <TransformControls mode="translate">
      <mesh
        onClick={(e) => {
          // handle color change on click
          setColor((prevColor) => {
            if (color === "lightblue") {
              return "hotpink";
            } else {
              return "lightblue";
            }
          });
        }}
      >
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color={color} />
      </mesh>
    </TransformControls>
  );
};

export { StyleBox };
