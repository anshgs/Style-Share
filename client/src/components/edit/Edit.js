import React, { useState } from "react";
import Box from '@mui/material/Box';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";
import { StyleBox } from "./Object";
import { Scene } from "./Scene";
import { UI } from "./UI";


const Edit = () => {
  const [objects, setObjects] = useState([]);

  // editor should have a scene and a ui
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <UI objects={objects} setObjects={setObjects}/>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Scene objects={objects}/>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export { Edit };
