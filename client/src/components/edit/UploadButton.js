import React, { useRef } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

import Button from '@mui/material/Button';
import { v4 as uuidv4 } from "uuid";

const UploadButton = (props) => {
  // reference to the input form
  const inputFile = useRef();

  // function to actually update the list of objects
  const addObject = (object, name) => {
    if (object != null) {
      // count the number of instances of the object
      // and name the imported object accordingly
      let count = 0;
      props.objects.forEach((object_instance) => {
        const objectName = object_instance.name.split(' ')[0];
        if (objectName === name) {
          count++;
        }
      });
      object.name = name + " (" + count.toString() + ")";

      // update the list of objects with the new object
      props.setObjects(prevObjects => {
        return [...prevObjects, {key: uuidv4(), name: object.name, data: object}];
      });
    }
  }

  // helper functions to load different file formats
  const addOBJ = (file) => {
    const reader = new FileReader();
    reader.addEventListener( 'load', () => {
      /// use the three js loader to parse the OBJ file
      var object = new OBJLoader().parse( reader.result );
      addObject(object, file.name);
    }, false);
    reader.readAsText(file);
  }

  const addFBX = (file) => {
    const reader = new FileReader();
    reader.addEventListener( 'load', () => {
      /// use the three js loader to parse the FBX file
      var object = new FBXLoader().parse( reader.result );
      addObject(object, file.name);
    }, false);
    reader.readAsArrayBuffer(file);
  }

  const addGLTF = (file) => {
    const reader = new FileReader();
    reader.addEventListener( 'load', () => {
      /// use the three js loader to parse the GLTF file
      let draco = new DRACOLoader();
      draco.setDecoderPath('three/examples/js/libs/draco/gltf/');
      let loader = new GLTFLoader();
      loader.setDRACOLoader(draco);

      loader.parse(reader.result, '', (result) => {
        var object = result.scene;
        addObject(object, file.name);
      });
    }, false);
    reader.readAsArrayBuffer(file);
  }

  // callback when the input form value changes
  const handleUploadFile = (e) => {
    const file = inputFile.current.files[0];
    const ext = file.name.split('.').pop().toLowerCase();

    // read file object that was input from form
    // different file extensions should be handled differently
    if (file) {
      switch (ext) {
        case "obj":
          addOBJ(file);
          break;
        case "fbx":
          addFBX(file);
          break;
        case "glb":
        case "gltf":
          addGLTF(file);
          break;
        default:
          // to-do: would be good to notify user that the format is invalid,
          // but just ignore it for now
      }
    }

    // reset form value so that onChange processes again
    inputFile.current.value = null;
  }

  return (
    <Button variant="contained" component="label">
      Upload File
      <input ref={inputFile} type="file" onChange={handleUploadFile} hidden/>
    </Button>
  );
}

export { UploadButton };
