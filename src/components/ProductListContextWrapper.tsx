import React, { useReducer } from "react";
import ProductListReducer, {
  initialProductListReducerState,
  ProductListReducerAction,
  ProductListReducerStateModel
} from "../reducers/productListReducer";

interface ProductListContextModel {
  state: ProductListReducerStateModel;
  dispatch: React.Dispatch<ProductListReducerAction>;
}

//using third party library for state management will be over engineering for this application scope
//so i decided to manage app state with context-api with useReducer
export const ProductListContext = React.createContext<ProductListContextModel>({
  state: initialProductListReducerState,
  dispatch: () => {}
});

const ProductListContextWrapper: React.FunctionComponent = ({
  children
}): React.ReactElement => {
  const [state, dispatch] = useReducer(
    ProductListReducer,
    initialProductListReducerState
  );
  return (
    <ProductListContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductListContext.Provider>
  );
};

export default ProductListContextWrapper;
