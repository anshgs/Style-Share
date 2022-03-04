import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TransformOptions = (props) => {
  // set the transform mode to whatever the selected value is
  const handleChange = (e) => {
    props.setTransformMode(e.target.value);
  };

  // transform values are translate, rotate, and scale
  return (
    <FormControl fullWidth>
      <InputLabel>TransformControls</InputLabel>
      <Select
        defaultValue="translate"
        label="TransformControls"
        onChange={handleChange}
      >
        <MenuItem value={"translate"}>Translate</MenuItem>
        <MenuItem value={"rotate"}>Rotate</MenuItem>
        <MenuItem value={"scale"}>Scale</MenuItem>
      </Select>
    </FormControl>
  );
}

export { TransformOptions };
