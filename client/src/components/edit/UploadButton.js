import React, { useRef } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

import Button from '@mui/material/Button';
import { v4 as uuidv4 } from "uuid";

const UploadButton = (props) => {
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

  return (
    <Button variant="contained" component="label">
      Upload File
      <input ref={inputFile} type="file" onChange={handleAddObject} hidden/>
    </Button>
  );
}

export { UploadButton };
