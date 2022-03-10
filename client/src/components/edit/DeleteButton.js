import React, { useRef } from 'react';
import Button from '@mui/material/Button';

const DeleteButton = (props) => {
  // callback to delete object
  const handleOnClick = (e) => {
    // only add back objects that do not match the selected object
    props.setObjects(props.objects.filter(object => {
      return (object.key != props.selectedObject);
    }));
    props.setSelectedObject(null);
  }

  return (
    <Button variant="contained" component="label" disabled={props.selectedObject == null} onClick={handleOnClick}>
      Delete Object
    </Button>
  );
}

export { DeleteButton }
