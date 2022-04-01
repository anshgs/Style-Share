import React, { useRef } from 'react';
import Button from '@mui/material/Button';

<<<<<<< HEAD
const SaveStyleButton = (props) => {
  // callback to delete object
  const handleOnClick = (e) => {
    // only add back objects that do not match the selected object
    props.saveCanvas(true);
=======
const SaveButton = (props) => {
  // callback to delete object
  const handleOnClick = (e) => {
    // only add back objects that do not match the selected object
    props.saveCanvas();
>>>>>>> 97f9175 (add save button)
  }

  return (
    <Button variant="contained" component="label" onClick={handleOnClick}>
<<<<<<< HEAD
      Save Scene as Style
=======
      Save Scene
>>>>>>> 97f9175 (add save button)
    </Button>
  );
}

<<<<<<< HEAD
const SaveContentButton = (props) => {
  // callback to delete object
  const handleOnClick = (e) => {
    // only add back objects that do not match the selected object
    props.saveCanvas(false);
  }

  return (
    <Button variant="contained" component="label" onClick={handleOnClick}>
      Save Scene as Content
    </Button>
  );
}

export { SaveStyleButton, SaveContentButton }
=======
export { SaveButton }
>>>>>>> 97f9175 (add save button)
