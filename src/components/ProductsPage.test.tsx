jest.mock("../api/productApi");
import { act, render, waitForElementToBeRemoved } from "@testing-library/react";
import React from "react";
import ProductsPage from "./ProductsPage";

describe("ProductPage", () => {
  it("check products page renders correctly", async () => {
    const wrapper = render(<ProductsPage />);

    await act(async () => {
      await waitForElementToBeRemoved(() =>
        wrapper.getByText("Products are loading...")
      );
    });

    const nodes = document.getElementsByClassName("name");
    expect(nodes.length).toEqual(3);
  });
});
