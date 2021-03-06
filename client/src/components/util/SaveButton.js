import React, { useRef } from 'react';
import Button from '@mui/material/Button';

const SaveStyleButton = (props) => {
  // callback to delete object
  const handleOnClick = (e) => {
    // only add back objects that do not match the selected object
    props.saveCanvas(true);
  }

  return (
    <Button variant="contained" component="label" onClick={handleOnClick}>
      Save Scene as Style
    </Button>
  );
}

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

const DownloadButton = (props) => {
  // callback to delete object
  const handleOnClick = (e) => {
    // only add back objects that do not match the selected object
    props.saveCanvas();
    window.location.href = "https://style-transfer-backend-ix3zc64heq-uc.a.run.app/login";
  }

  return (
    <Button variant="contained" component="label" onClick={handleOnClick}>
      Download and Share Image
    </Button>
  );
}

export { SaveStyleButton, SaveContentButton, DownloadButton }
