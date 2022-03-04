import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { withStyles } from '@material-ui/core/styles'

import { v4 as uuidv4 } from "uuid";

const SceneList = (props) => {
  const [open, setOpen] = React.useState(true);

  // toggle the list of objects
  const handleClick = () => {
    setOpen(!open);
  };

  // return a list item button for each object
  // that reacts according to selection
  const drawObjectList = () => {
    return (
      props.objects.map(object => {
        // if the object name is clicked
        // the object should also be selected
        const handleSelect = (e) => {
          if (props.selected == object.key) {
            props.setSelected(null);
          } else {
            props.setSelected(object.key);
          }
        }

        return (
          <ListItemButton sx={{ pl: 4 }} key={uuidv4()} onClick={handleSelect}
                          style={{backgroundColor: ((props.selected == object.key) ? "#bbdefb" : "white")}}>
            <ListItemText primary={object.name}/>
          </ListItemButton>
        )
      })
    )
  }

  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Objects" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {drawObjectList()}
        </List>
      </Collapse>
    </List>
  );
}

export { SceneList };
