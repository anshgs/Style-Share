import React, { Suspense, useState } from "react";
import Box from '@mui/material/Box';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls, Environment } from "@react-three/drei";
import { Scene } from "./Scene";
import { UI } from "./UI";


const Edit = () => {
  const [objects, setObjects] = useState([]);
  const [transformMode, setTransformMode] = useState("translate");
  const [selectedObject, setSelectedObject] = useState(null);
  const [toggleGrid, setToggleGrid] = useState(true);
  const [environment, setEnvironment] = useState("environments/autumn_forest.hdr");

  const drawGridHelper = () => toggleGrid ? <gridHelper args={[10, 10, 'white', 'white']} /> : null;

  // editor should have a scene and a ui
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <UI objects={objects} setObjects={setObjects}
          toggleGrid={toggleGrid} setToggleGrid={setToggleGrid}
          selectedObject={selectedObject} setSelectedObject={setSelectedObject}
          transformMode={transformMode} setTransformMode={setTransformMode}
          environment={environment} setEnvironment={setEnvironment}/>
      <Canvas>
        <Suspense fallback={null}>
          <Environment background={true} files={environment} path={'/'} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <Scene objects={objects} transformMode={transformMode} selectedObject={selectedObject} setSelectedObject={setSelectedObject}/>
          {drawGridHelper()}
          <OrbitControls makeDefault />
        </Suspense>
      </Canvas>
    </div>
  );
};

export { Edit };
