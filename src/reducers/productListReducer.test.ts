import { productListTestData } from "../testUtils/productListTestData";
import ProductListReducer, {
  initialProductListReducerState,
  ProductListReducerAction,
  ProductListReducerActionType
} from "./productListReducer";

describe("ProductListReducer", () => {
  it("check ProductListReducer generates correct state for SET_PRODUCT_LIST action", () => {
    const action: ProductListReducerAction = {
      type: ProductListReducerActionType.SET_PRODUCT_LIST,
      payload: productListTestData
    };
    const newState = ProductListReducer(initialProductListReducerState, action);

    expect(newState.displayedProducts.length).toEqual(
      productListTestData.length
    );
    expect(newState.products?.length).toEqual(productListTestData.length);
  });
});
