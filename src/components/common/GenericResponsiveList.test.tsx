import GenericResponsiveList from "./GenericResponsiveList";
import React from "react";
import { productListTestData } from "../../testUtils/productListTestData";
import Product from "../Product";
import { mount } from "enzyme";
import ProductModel from "../../models/productModel";

describe("GenericResponsiveList", () => {
  it("GenericResponsiveList renders correctly", () => {
    const wrapper = mount(
      <GenericResponsiveList items={productListTestData}>
        {(item: ProductModel) => (
          <Product key={item.id} product={item}></Product>
        )}
      </GenericResponsiveList>
    );

    expect(wrapper.find(".name").length).toEqual(productListTestData.length);
  });
});
