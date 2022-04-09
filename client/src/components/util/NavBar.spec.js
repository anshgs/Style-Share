import { NavBar } from "./NavBar";
import { AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import React from "react";

describe("App Component", () => {
  it("Tests the NavBar component", () => {
    const wrapper = shallow(<NavBar signIn={true} />);
    expect(wrapper.find(AppBar)).to.have.length(1); //check for 1 AppBar
    expect(wrapper.find(Toolbar)).to.have.length(1); //check for 1 Toolbar
    expect(wrapper.find(IconButton)).to.have.length(1); //check for 1 IconButton
    expect(wrapper.find(Typography)).to.have.length(1); //check for 1 Toolbar
    expect(wrapper.find(Button)).to.have.length(2); //check for 1 IconButton
  });
});
