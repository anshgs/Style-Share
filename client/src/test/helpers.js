import { expect } from "chai";
import pkg from "enzyme";

import Adapter from "enzyme-adapter-react-16";
const { mount, render, shallow, configure } = pkg;

configure({ adapter: new Adapter() });

global.expect = expect;

global.mount = mount;
global.render = render;
global.shallow = shallow;
