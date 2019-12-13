import React, { useReducer } from "react";
import ProductModel from "../models/productModel";

interface ProductListStoreModel {
  products: ProductModel[] | null;
  brandList: string[];
  typeList: string[];
  filterBrand: string;
  filterType: string;
  sortField: string;
  sortDirection: string;
  displayedProducts: ProductModel[];
}

const initialProductListStore: ProductListStoreModel = {
  products: [],
  brandList: [],
  typeList: [],
  filterBrand: "",
  filterType: "",
  sortField: "",
  sortDirection: "",
  displayedProducts: []
};

export enum ProductListActionType {
  SET_PRODUCT_LIST = "SET_PRODUCT_LIST",
  SET_FILTER_BRAND = "SET_FILTER_BRAND",
  SET_FILTER_TYPE = "SET_FILTER_TYPE",
  SET_ORDER_FIELD = "SET_ORDER_FIELD"
}

type ProductListAction =
  | {
      type: ProductListActionType.SET_PRODUCT_LIST;
      payload: ProductModel[] | null;
    }
  | {
      type: ProductListActionType.SET_FILTER_BRAND;
      payload: string;
    }
  | {
      type: ProductListActionType.SET_FILTER_TYPE;
      payload: string;
    }
  | {
      type: ProductListActionType.SET_ORDER_FIELD;
      payload: { sortField: string; sortDirection: string };
    };

const setDisplayedProducts = (
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

const getDistinctPropsFromArray = (
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

const productListReducer = (
  state: ProductListStoreModel = initialProductListStore,
  action: ProductListAction
): ProductListStoreModel => {
  switch (action.type) {
    case ProductListActionType.SET_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
        brandList: getDistinctPropsFromArray(action.payload, "brand"),
        typeList: getDistinctPropsFromArray(action.payload, "type"),
        displayedProducts: setDisplayedProducts(
          action.payload,
          state.filterBrand,
          state.filterType,
          state.sortField,
          state.sortDirection
        )
      };
    case ProductListActionType.SET_FILTER_BRAND:
      return {
        ...state,
        filterBrand: action.payload,
        displayedProducts: setDisplayedProducts(
          state.products,
          action.payload,
          state.filterType,
          state.sortField,
          state.sortDirection
        )
      };
    case ProductListActionType.SET_FILTER_TYPE:
      return {
        ...state,
        filterType: action.payload,
        displayedProducts: setDisplayedProducts(
          state.products,
          state.filterBrand,
          action.payload,
          state.sortField,
          state.sortDirection
        )
      };
    case ProductListActionType.SET_ORDER_FIELD:
      return {
        ...state,
        sortField: action.payload.sortField,
        sortDirection: action.payload.sortDirection,
        displayedProducts: setDisplayedProducts(
          state.products,
          state.filterBrand,
          state.filterType,
          action.payload.sortField,
          action.payload.sortDirection
        )
      };
    default:
      return state;
  }
};

interface ProductListContextModel {
  state: ProductListStoreModel;
  dispatch: React.Dispatch<ProductListAction>;
}

export const ProductListContext = React.createContext<ProductListContextModel>({
  state: initialProductListStore,
  dispatch: () => {}
});

//

const ProductListContextWrapper: React.FunctionComponent = ({
  children
}): React.ReactElement => {
  const [state, dispatch] = useReducer(
    productListReducer,
    initialProductListStore
  );
  return (
    <ProductListContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductListContext.Provider>
  );
};

//export default ProductListContextWrapper;

//HOC for wrapping component with  pruduct list context
const ProductListContextHOC = (WrappedComponent: React.FunctionComponent) => {
  const withProductContext: React.FunctionComponent = (
    props
  ): React.ReactElement => {
    return (
      <ProductListContextWrapper>
        <WrappedComponent {...props}></WrappedComponent>
      </ProductListContextWrapper>
    );
  };

  return withProductContext;
};

export default ProductListContextHOC;
