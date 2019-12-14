import ProductModel from "../models/productModel";

//some useful functions for keeping productListReducer code clean
export default class ProductListReducerHelper {
  static filterAndSortDisplayedProducts = (
    productList: ProductModel[] | null,
    filterBrand: string,
    filterType: string,
    sortField: string,
    sortDirection: string
  ) => {
    if (!productList) {
      return [];
    }
    //filter
    const filteredList = productList.filter(
      (product: ProductModel) =>
        (filterBrand === "" || product.brand === filterBrand) &&
        (filterType === "" || product.type === filterType)
    );
    //sort
    if (sortField) {
      filteredList.sort(
        (a: ProductModel, b: ProductModel) =>
          (a[sortField] > b[sortField] ? 1 : -1) *
          (sortDirection === "Desc" ? -1 : 1)
      );
    }

    return filteredList;
  };

  static getDistinctPropsFromArray = (
    productList: ProductModel[] | null,
    propName: string
  ): string[] => {
    if (!productList) {
      return [];
    }
    return [
      ...Array.from(
        new Set(productList.map((product: ProductModel) => product[propName]))
      )
    ];
  };
}
