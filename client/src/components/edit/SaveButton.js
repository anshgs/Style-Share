import React, { useRef } from 'react';
import Button from '@mui/material/Button';

const SaveButton = (props) => {
  // callback to delete object
  const handleOnClick = (e) => {
    // only add back objects that do not match the selected object
    props.saveCanvas();
  }

  return (
    <Button variant="contained" component="label" onClick={handleOnClick}>
      Save Scene
    </Button>
  );
}

export { SaveButton }
