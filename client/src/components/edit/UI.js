import React, { useRef } from 'react';
import Box from '@material-ui/core/Box'

import Button from '@mui/material/Button';
import { StyleBox } from "./Object";
import { v4 as uuidv4 } from "uuid";

const UI = (props) => {
  const objects = props.objects;
  const inputFile = useRef();

  function handleAddObject(e) {
    props.setObjects(prevObjects => {
      return [...prevObjects, {key: uuidv4(), filepath: inputFile.current.value}];
    })
    inputFile.current.value = null;
  }

  return (
    <Box>
      <Button variant="contained" component="label">
        Upload File
        <input ref={inputFile} type="file" onChange={handleAddObject} hidden/>
      </Button>
    </Box>
  );
};

export { UI };
