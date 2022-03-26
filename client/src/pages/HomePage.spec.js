import { NavMenu } from "../components/util/NavMenu";
import { HomePage } from "./HomePage.js";
import React from "react";

describe("App Component", () => {
  it("renders the Counter wrapper", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(NavMenu)).to.have.length(1);
  });
});
