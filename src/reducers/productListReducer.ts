import ProductReducerHelper from "../utils/ProductListReducerHelper";
import ProductModel from "../models/productModel";

export interface ProductListReducerStateModel {
  products: ProductModel[] | null;
  brandList: string[];
  typeList: string[];
  filterBrand: string;
  filterType: string;
  sortField: string;
  sortDirection: string;
  displayedProducts: ProductModel[];
}

export const initialProductListReducerState: ProductListReducerStateModel = {
  products: [],
  brandList: [],
  typeList: [],
  filterBrand: "",
  filterType: "",
  sortField: "",
  sortDirection: "",
  displayedProducts: []
};

export enum ProductListReducerActionType {
  SET_PRODUCT_LIST = "SET_PRODUCT_LIST",
  SET_FILTER_BRAND = "SET_FILTER_BRAND",
  SET_FILTER_TYPE = "SET_FILTER_TYPE",
  SET_ORDER_FIELD = "SET_ORDER_FIELD"
}

export type ProductListReducerAction =
  | {
      type: ProductListReducerActionType.SET_PRODUCT_LIST;
      payload: ProductModel[] | null;
    }
  | {
      type: ProductListReducerActionType.SET_FILTER_BRAND;
      payload: string;
    }
  | {
      type: ProductListReducerActionType.SET_FILTER_TYPE;
      payload: string;
    }
  | {
      type: ProductListReducerActionType.SET_ORDER_FIELD;
      payload: { sortField: string; sortDirection: string };
    };

const ProductListReducer = (
  state: ProductListReducerStateModel = initialProductListReducerState,
  action: ProductListReducerAction
): ProductListReducerStateModel => {
  switch (action.type) {
    case ProductListReducerActionType.SET_PRODUCT_LIST:
      return {
        ...state,
        products: action.payload,
        brandList: action.payload
          ? ProductReducerHelper.getDistinctPropsFromArray(
              action.payload,
              "brand"
            )
          : state.brandList,
        typeList: action.payload
          ? ProductReducerHelper.getDistinctPropsFromArray(
              action.payload,
              "type"
            )
          : state.typeList,
        displayedProducts: ProductReducerHelper.filterAndSortDisplayedProducts(
          action.payload,
          state.filterBrand,
          state.filterType,
          state.sortField,
          state.sortDirection
        )
      };
    case ProductListReducerActionType.SET_FILTER_BRAND:
      return {
        ...state,
        filterBrand: action.payload,
        displayedProducts: ProductReducerHelper.filterAndSortDisplayedProducts(
          state.products,
          action.payload,
          state.filterType,
          state.sortField,
          state.sortDirection
        )
      };
    case ProductListReducerActionType.SET_FILTER_TYPE:
      return {
        ...state,
        filterType: action.payload,
        displayedProducts: ProductReducerHelper.filterAndSortDisplayedProducts(
          state.products,
          state.filterBrand,
          action.payload,
          state.sortField,
          state.sortDirection
        )
      };
    case ProductListReducerActionType.SET_ORDER_FIELD:
      return {
        ...state,
        sortField: action.payload.sortField,
        sortDirection: action.payload.sortDirection,
        displayedProducts: ProductReducerHelper.filterAndSortDisplayedProducts(
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

export default ProductListReducer;
