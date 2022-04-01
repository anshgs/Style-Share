import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { v4 as uuidv4 } from "uuid";

// right now, if any environments are added to public/environments
// they also need to be added here in order to be parsed correctly
const environments = [
  "autumn_forest.hdr",
  "night_sky.hdr",
  "rocky_mountains.hdr",
  "ocean_sunset.hdr"
];

const EnvironmentSelector = (props) => {
  // set the transform mode to whatever the selected value is
  const handleChange = (e) => {
    props.setEnvironment(e.target.value);
  };

  // list of all the environments in public/environments
  const drawEnvironmentList = () => {
    return (
      environments.map(hdr => {
        // label the hdr with an appropriate name
        // (i.e. "example_env.hdr" becomes "Example Env")
        var name = hdr.replace('_', ' ').replace('.hdr', '');
        var split = name.split(' ');
        for (var i = 0; i < split.length; i++) {
          split[i]= split[i].charAt(0).toUpperCase() + split[i].slice(1);
        }
        name = split.join(" ");

        return (
          <MenuItem key={uuidv4()} value={"environments/" + hdr}>{name}</MenuItem>
        )
      })
    )
  }

  // transform values are translate, rotate, and scale
  return (
    <FormControl fullWidth>
      <InputLabel>Environment</InputLabel>
      <Select
        defaultValue="environments/autumn_forest.hdr"
        label="Environment"
        onChange={handleChange}
      >
        {drawEnvironmentList()}
      </Select>
    </FormControl>
  );
}

export { EnvironmentSelector };
