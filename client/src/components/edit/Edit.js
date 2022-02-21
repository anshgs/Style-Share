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

const Edit = () => {
  // for now, set default lights and include temporary box
  return (
    <div>
      <Canvas style={{ height: "100vh", width: "100vw" }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <StyleBox />
        {/* set camera controls (overridden when transform controls are used) */}
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export { Edit };
