import React, { useRef } from 'react';
import Box from '@material-ui/core/Box'
import { UploadButton } from "./UploadButton";
import { DeleteButton } from "./DeleteButton";
import { SceneList } from './SceneList';
import { TransformOptions } from './TransformOptions';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const UI = (props) => {
  // callback when grid helper is toggled
  const handleToggleGrid = (e) => {
    props.setToggleGrid(e.target.checked);
  }

  return (
    <Box style={{position: 'fixed', zIndex: 999}}>
      <UploadButton objects={props.objects} setObjects={props.setObjects}/>
      <DeleteButton objects={props.objects} setObjects={props.setObjects} selectedObject={props.selectedObject} setSelectedObject={props.setSelectedObject}/>
      <FormControlLabel control={<Checkbox checked={props.toggleGrid} onChange={handleToggleGrid} />} label="Display Grid" />
      <SceneList objects={props.objects} selected={props.selectedObject} setSelected={props.setSelectedObject}/>
      <TransformOptions transformMode={props.transformMode} setTransformMode={props.setTransformMode}/>
    </Box>
  );
};

export { UI };
