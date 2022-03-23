import React, { useRef } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

import Button from '@mui/material/Button';
import { v4 as uuidv4 } from "uuid";

// need helper functions to read text or binary data asynchronously,
// so that we can wait for the object to be loaded before
// trying to add the object to the list of objects
const readTextAsync = async (data) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsText(data);
  })
}

const readBinaryAsync = async (data) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsArrayBuffer(data);
  })
}

// helper function to read the model file
// and load depending on the extension name
const parseFile = async (inputFile) => {
  let file = inputFile.current.files[0];
  let ext = file.name.split('.').pop().toLowerCase();
  let data = null, object = null;

  // read file object that was input from form
  // different file extensions should be handled differently
  if (inputFile.current.files[0]) {
    switch (ext) {
      case "obj":
        data = await readTextAsync(file);
        object = new OBJLoader().parse(data);
        break;
      case "fbx":
        data = await readBinaryAsync(file);
        object = new FBXLoader().parse(data);
        break;
      default:
        object = null;
    }
  }

  if (object != null) {
    object.name = file.name;
  }
  console.log(object);
  return object;
}

// React component to deal with uploading 3d models
const UploadButton = (props) => {
  // reference to the input form
  const inputFile = useRef();

  // callback when the input form value changes
  const handleAddObject = async (e) => {
    let object = await parseFile(inputFile);
    if (object != null) {
      // count the number of instances of the object
      // and name the imported object accordingly
      let count = 0;
      props.objects.forEach((object_instance) => {
        const objectName = object_instance.name.split(' ')[0];
        if (objectName === object.name) {
          count++;
        }
      });
      object.name = object.name + " (" + count.toString() + ")";

      // update the list of objects with the new object
      props.setObjects(prevObjects => {
        return [...prevObjects, {key: uuidv4(), name: object.name, data: object}];
      });
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
