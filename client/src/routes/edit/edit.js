import React, {useState, useRef} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls, TransformControls} from '@react-three/drei';

// temporary box for testing
function Box() {
  // allow box color to be changed upon click
  const [color, setColor] = useState("hotpink");
  return (
    // attach transform controls (fixed to translate for now) to box
    <TransformControls mode="translate">
    <mesh onClick={(e) => {
      // handle color change on click
      setColor(prevColor => {
        if (color === "lightblue") {
          return "hotpink";
        } else {
          return "lightblue"
        }
      })
    }}>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" color={color}/>
    </mesh>
    </TransformControls>
  )
}

export default function Edit() {
  // for now, set default lights and include temporary box
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10,15,10]} angle = {0.3}/>
      <Box/>
      // set camera controls (overridden when transform controls are used)
      <OrbitControls makeDefault/>
    </Canvas>
  );
}
