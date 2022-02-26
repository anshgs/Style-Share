import React, { useRef } from 'react';
import Box from '@material-ui/core/Box'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { StyleBox } from "./Object";

const UI = (props) => {

  const objects = props.objects;
  const inputFile = useRef(null);

  function handleAddObject(e) {
    props.setObjects(prevObjects => {
      return [...prevObjects, {}];
    })
  }

  return (
    <Box>
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
      />
      <Button variant="contained" onClick={handleAddObject}>Contained</Button>
    </Box>
  );
};

export { UI };
