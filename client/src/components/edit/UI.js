import React, { useRef } from 'react';
import Box from '@material-ui/core/Box'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

import Button from '@mui/material/Button';
import { SceneList } from './SceneList';
import { TransformOptions } from './TransformOptions';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { v4 as uuidv4 } from "uuid";

const UI = (props) => {
  // reference to the input form
  const inputFile = useRef();

  // callback when the input form value changes
  const handleAddObject = (e) => {
    let name = inputFile.current.files[0].name;
    let reader = new FileReader();

    // callback function after reader finishes reading text
    reader.addEventListener( 'load', () => {
      /// use the three js loader to parse the OBJ file
			var object = new OBJLoader().parse( reader.result );

      // count the number of instances of the object
      // and name the imported object accordingly
      let count = 0;
      props.objects.forEach((object) => {
        const objectName = object.name.split(' ')[0];
        if (objectName === name) {
          count++;
        }
      });
      object.name = name + " (" + count.toString() + ")";

      // update the list of objects with the new object
      props.setObjects(prevObjects => {
        return [...prevObjects, {key: uuidv4(), name: object.name, data: object}];
      })
		}, false );

    // read file object that was input from form
    if (inputFile.current.files[0]) {
      reader.readAsText(inputFile.current.files[0]);
    }

    // reset form value so that onChange processes again
    inputFile.current.value = null;
  }

  // callback when grid helper is toggled
  const handleToggleGrid = (e) => {
    props.setToggleGrid(e.target.checked);
  }

  return (
    <Box style={{position: 'fixed', zIndex: 999}}>
      <Button variant="contained" component="label">
        Upload File
        <input ref={inputFile} type="file" onChange={handleAddObject} hidden/>
      </Button>
      <FormControlLabel control={<Checkbox checked={props.toggleGrid} onChange={handleToggleGrid} />} label="Display Grid" />
      <SceneList objects={props.objects} selected={props.selectedObject} setSelected={props.setSelectedObject}/>
      <TransformOptions transformMode={props.transformMode} setTransformMode={props.setTransformMode}/>
    </Box>
  );
};

export { UI };
