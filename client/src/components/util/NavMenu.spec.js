import { NavMenu } from "./NavMenu";
import { ListItem, ListItemText, Drawer, List, Button } from "@mui/material";
import React from "react";

describe("App Component", () => {
  it("Tests the NavMenu component", () => {
    const wrapper = shallow(<NavMenu drawerOpen={true} />);
    expect(wrapper.find(Drawer)).to.have.length(1); //check for 1 Drawer
    expect(wrapper.find(List)).to.have.length(1); //check for 1 List
    expect(wrapper.find(ListItem)).to.have.length(4); //check for 4 ListItem
    expect(wrapper.find(ListItemText)).to.have.length(4); //check for 4 ListItemText
    expect(wrapper.find(Button)).to.have.length(0); //check for 0 Button
  });
});
