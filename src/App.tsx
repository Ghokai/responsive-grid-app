import React, { useEffect, useState } from "react";
import ProductApi from "./api/productApi";
import GenerericResponsiveList from "./components/GenerericResponsiveList";
import Product from "./components/Product";
import ProductModel from "./models/productModel";

const App: React.FC = (): React.ReactNode => {
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
    <div className="App">
      <GenerericResponsiveList items={productList}>
        {(item: ProductModel) => (
          <Product key={item.id} product={item}></Product>
        )}
      </GenerericResponsiveList>
    </div>
  );
};

export default App;
