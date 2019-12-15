import Product from "./Product";
import { productListTestData } from "../testUtils/productListTestData";
import { mount } from "enzyme";
import React from "react";

describe("Product", () => {
  it("check renders Product component correctly ", () => {
    const wrapper = mount(<Product product={productListTestData[0]}></Product>);

    expect(wrapper.find(".name").text()).toEqual(productListTestData[0].name);
    expect(wrapper.find(".type").text()).toEqual(productListTestData[0].type);
  });
});
