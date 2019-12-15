import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders filter label", () => {
    const wrapper = mount(<App />);
    const filterLabel = <label>Filter By:</label>;
    expect(wrapper.contains(filterLabel)).toEqual(true);
  });
});
