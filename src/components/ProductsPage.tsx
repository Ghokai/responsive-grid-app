import React, { useEffect, useState, useContext } from "react";
import ProductApi from "../api/productApi";
import ProductModel from "../models/productModel";
import GenericResponsiveList from "./GenericResponsiveList";
import Product from "./Product";
import useApi from "../hooks/useApi";
import ProductListContextHOC, {
  ProductListContext,
  ProductListActionType
} from "./ProductListContext";
import ProductHeader from "./ProductsHeader";
import styled from "styled-components";

const ProductsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 5%;
`;

const ProductsPage: React.FunctionComponent = (): React.ReactElement => {
  const { fetchApi, response, loading, error } = useApi(ProductApi.getProducts);
  const {
    state: {
      products,
      brandList,
      typeList,
      filterBrand,
      filterType,
      sortField,
      sortDirection,
      displayedProducts
    },
    dispatch
  } = useContext(ProductListContext);

  console.log(displayedProducts);
  console.log(products);
  console.log(brandList);
  console.log(typeList);
  // console.log(dispatch);

  useEffect(() => {
    // console.log(response);
    dispatch({
      type: ProductListActionType.SET_PRODUCT_LIST,
      payload: response
    });
  }, [response]);

  const renderProductItem = (item: ProductModel) => (
    <Product key={item.id} product={item}></Product>
  );

  // if (loading || !displayedProducts) {
  //   return <div>Loading...</div>;
  // }
  if (error) {
    return <div>Error...</div>;
  }

  return (
    <ProductsPageContainer>
      <ProductHeader fetchItems={fetchApi}></ProductHeader>
      {loading || !displayedProducts ? (
        <div>Loading</div>
      ) : (
        <GenericResponsiveList items={displayedProducts}>
          {renderProductItem}
        </GenericResponsiveList>
      )}
    </ProductsPageContainer>
  );
};

export default ProductListContextHOC(ProductsPage);
