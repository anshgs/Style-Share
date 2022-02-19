import React, {useState} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';

function Box() {
  const [color, setColor] = useState("hotpink")
  return (
    <mesh onClick={(e) => {
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
  )
}

export default function Edit() {
  return (
    <Canvas>
      <OrbitControls/>
      <ambientLight intensity={0.5} />
      <spotLight position={[10,15,10]} angle = {0.3}/>
      <Box/>
    </Canvas>
  );
}
