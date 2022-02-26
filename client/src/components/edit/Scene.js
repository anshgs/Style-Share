import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";
import { StyleBox, Object } from "./Object";

const Scene = (props) => {
  const objects = props.objects;
  return (
    objects.map(object => {
      // return <Object key={object.filepath} filepath={object.filepath}/>
      return <StyleBox key={object.key}/>
    })
  )
}

export { Scene };
