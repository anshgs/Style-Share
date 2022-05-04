import { NavMenu } from "../components/util/NavMenu";
import { NavBar } from "../components/util/NavBar";
import { Typography } from "@mui/material";
import { HomePage } from "./HomePage.js";
import React from "react";

describe("App Component", () => {
  it("Tests the HomePage component", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(NavMenu)).to.have.length(0); //check for 1 NavMenu
    expect(wrapper.find(NavBar)).to.have.length(1); //check for 1 NavBar
    expect(wrapper.find(Typography)).to.have.length(2); //check for 2 Typography
  });
});
