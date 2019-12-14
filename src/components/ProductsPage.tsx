import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ProductApi from "../api/productApi";
import useApi from "../hooks/useApi";
import ProductModel from "../models/productModel";
import GenericResponsiveList from "./common/GenericResponsiveList";
import Product from "./Product";
import { ProductListReducerActionType } from "../reducer/productListReducer";
import { ProductListContext } from "./ProductListContextWrapper";
import ProductListContextHOC from "./ProductListContextHOC";
import ProductHeader from "./ProductsHeader";

const ProductsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 5%;
`;

const Loading = styled.div`
  margin-top: 40px;
  width: 100%;
  text-align: center;
  font-style: italic;
`;

const ProductsPage: React.FunctionComponent = (): React.ReactElement => {
  const { fetchApi, response, loading, error } = useApi(ProductApi.getProducts);
  const {
    state: { displayedProducts },
    dispatch
  } = useContext(ProductListContext);

  useEffect(() => {
    dispatch({
      type: ProductListReducerActionType.SET_PRODUCT_LIST,
      payload: response
    });
  }, [response, dispatch]);

  const renderProductItem = (item: ProductModel) => (
    <Product key={item.id} product={item}></Product>
  );

  if (error) {
    return <div>Error Occured...</div>;
  }

  return (
    <ProductsPageContainer>
      <ProductHeader loading={loading} fetchItems={fetchApi}></ProductHeader>
      {loading ? (
        <Loading>Products are loading...</Loading>
      ) : (
        <GenericResponsiveList items={displayedProducts}>
          {renderProductItem}
        </GenericResponsiveList>
      )}
    </ProductsPageContainer>
  );
};

export default ProductListContextHOC(ProductsPage);
