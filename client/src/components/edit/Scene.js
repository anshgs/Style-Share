import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";
import { StyleBox } from "./Object";

const Scene = (props) => {
  const objects = props.objects;
  return (
    objects.map(object => {
      return <StyleBox/>
    })
  )
}

export { Scene };
