import React, { useContext } from "react";
import styled from "styled-components";
import ProductListContextHOC, {
  ProductListContext,
  ProductListActionType
} from "./ProductListContext";

const ProductsHeaderContainer = styled.div`
  height: 50px;
  background-color: #ffe6ee;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

interface ProductsHeaderProps {
  fetchItems: () => Promise<void>;
}

const ProductsHeader: React.FunctionComponent<ProductsHeaderProps> = ({
  fetchItems
}: ProductsHeaderProps): React.ReactElement => {
  return (
    <ProductsHeaderContainer>
      <button onClick={fetchItems}>reload</button>
    </ProductsHeaderContainer>
  );
};

export default ProductsHeader;
