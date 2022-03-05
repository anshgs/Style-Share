import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";
import { OBJModel } from "./3DModel";

const Scene = (props) => {
  const objects = props.objects;
  return (
    objects.map(object => {
      return <OBJModel key={object.key} id={object.key} name={object.name} data={object.data} selected={props.selectedObject} setSelected={props.setSelectedObject} transformMode={props.transformMode}/>
    })
  )
}

export { Scene };
