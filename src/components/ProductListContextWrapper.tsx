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