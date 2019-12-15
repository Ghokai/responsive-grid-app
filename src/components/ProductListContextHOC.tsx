import React from "react";
import ProductListContextWrapper from "./ProductListContextWrapper";

//HOC for wrapping component with  pruduct list context api
const ProductListContextHOC = (
  WrappedComponent: React.FunctionComponent<any>
) => {
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
