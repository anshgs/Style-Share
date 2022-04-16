import React, { Suspense, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls, Environment } from "@react-three/drei";
import { setContentImage, setStyleImage } from "../../redux/store.js";
import { useDispatch } from "react-redux";
import { Scene } from "./Scene";
import { UI } from "./UI";

// wrapper for testing
const GridHelper = () => {
  return <gridHelper args={[10, 10, 'white', 'white']} />;
}

const Edit = () => {
  const canvas = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [objects, setObjects] = useState([]);
  const [transformMode, setTransformMode] = useState("translate");
  const [selectedObject, setSelectedObject] = useState(null);
  const [toggleGrid, setToggleGrid] = useState(true);
  const [environment, setEnvironment] = useState("environments/autumn_forest.hdr");

  const drawGridHelper = () => toggleGrid ? <GridHelper /> : null;

  // filler code right now to just save the image to disk
  const saveBlob = (function() {
  const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    return function saveData(blob, fileName) {
       const url = window.URL.createObjectURL(blob);
       a.href = url;
       a.download = fileName;
       a.click();
    };
  }());

  const saveCanvas = (style) => {
    canvas.current.toBlob(blob => {
      const imageUrl = URL.createObjectURL(blob);
      if (style) {
        dispatch(setStyleImage(imageUrl, <img alt="" key="content" src={imageUrl} />));
      } else {
        dispatch(setContentImage(imageUrl, <img alt="" key="content" src={imageUrl} />));
      }

      // redirect to the image/style page after scene is saved
      navigate("/upload");
    })
  }

  // editor should have a scene and a ui
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <UI objects={objects} setObjects={setObjects}
          toggleGrid={toggleGrid} setToggleGrid={setToggleGrid}
          selectedObject={selectedObject} setSelectedObject={setSelectedObject}
          transformMode={transformMode} setTransformMode={setTransformMode}
          environment={environment} setEnvironment={setEnvironment} saveCanvas={saveCanvas}/>
      <Canvas ref={canvas} gl={{preserveDrawingBuffer: true}}>
        <Suspense fallback={null}>
          <Environment background={true} files={environment} path={'/'} />
        </Suspense>
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <OrbitControls makeDefault />
        <Scene objects={objects} transformMode={transformMode} selectedObject={selectedObject} setSelectedObject={setSelectedObject}/>
        {drawGridHelper()}
      </Canvas>
    </div>
  );
};

export { Edit, GridHelper };
