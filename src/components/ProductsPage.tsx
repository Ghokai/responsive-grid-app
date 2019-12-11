import React, { useEffect, useState } from "react";
import ProductApi from "../api/productApi";
import ProductModel from "../models/productModel";
import GenericResponsiveList from "./GenericResponsiveList";
import Product from "./Product";

const ProductsPage: React.FC = (): React.ReactNode => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getProductsList = async () => {
      const response = await ProductApi.getProducts();
      setProductList(response);
      console.log(response);
    };
    getProductsList();
  }, []);

  return (
    <GenericResponsiveList items={productList}>
      {(item: ProductModel) => <Product key={item.id} product={item}></Product>}
    </GenericResponsiveList>
  );
};

export default ProductsPage;
