import ProductsHeader from "./ProductsHeader";
import { mount } from "enzyme";
import React from "react";
import ProductListContextWrapper from "./ProductListContextWrapper";

describe("ProductsHeader", () => {
  it("check ProductsHeader renders correctly", () => {
    const fetchItems = jest.fn();
    const loading = false;
    const wrapper = mount(
      <ProductListContextWrapper>
        <ProductsHeader
          fetchItems={fetchItems}
          loading={loading}
        ></ProductsHeader>
      </ProductListContextWrapper>
    );

    wrapper.find("button").simulate("click");
    expect(fetchItems).toHaveBeenCalled();
  });
});
