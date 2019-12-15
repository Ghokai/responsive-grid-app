import { productListTestData } from "../testUtils/productListTestData";
import ProductListReducerHelper from "./ProductListReducerHelper";

describe("ProductListReducerHelper", () => {
  it("check filterAndSortDisplayedProducts filters data correctly", () => {
    const filterBrandCriteria = "Lancôme";
    const filterTypeCriteria = "Eau de Parfum";
    const FilteredList = ProductListReducerHelper.filterAndSortDisplayedProducts(
      productListTestData,
      filterBrandCriteria,
      filterTypeCriteria,
      "",
      ""
    );

    expect(FilteredList[0].brand).toEqual(filterBrandCriteria);
    expect(FilteredList[0].type).toEqual(filterTypeCriteria);
  });

  it("check filterAndSortDisplayedProducts sorts data correctly", () => {
    const sortFieldCriteria = "price";
    const sortDirectionCriteria = "Asc";
    const FilteredList = ProductListReducerHelper.filterAndSortDisplayedProducts(
      productListTestData,
      "",
      "",
      sortFieldCriteria,
      sortDirectionCriteria
    );

    expect(FilteredList.length).toEqual(productListTestData.length);
    expect(FilteredList[0].price).toEqual(3395);
  });

  it("check getDistinctPropsFromArray works correctly", () => {
    const types = ProductListReducerHelper.getDistinctPropsFromArray(
      productListTestData,
      "type"
    );

    expect(types).toEqual(["Eau de Parfum", "Eau de Toilette"]);
  });
});
