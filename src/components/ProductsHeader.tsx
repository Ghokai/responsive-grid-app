import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./common/Button";
import Select from "./common/Select";
import { ProductListContext } from "./ProductListContextWrapper";
import { ProductListReducerActionType } from "../reducers/productListReducer";
import DeviceSize from "../utils/deviceSize";

const productSortFields = [
  { value: "name", text: "Name" },
  { value: "brand", text: "Brand" },
  { value: "type", text: "Type" },
  { value: "price", text: "Price" },
  { value: "size", text: "Size" },
  { value: "rating", text: "Rating" }
];

const sortDirections = [
  { value: "Asc", text: "Ascending" },
  { value: "Desc", text: "Descending" }
];

const ProductsHeaderContainer = styled.div`
  background-color: #ffe6ee;
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media ${DeviceSize.deviceWidths.mobileL} {
    flex-direction: column;
  }
  @media ${DeviceSize.deviceWidths.tablet} {
    flex-direction: row;
  }
  & > div {
    margin: 10px;
  }
`;

interface ProductsHeaderProps {
  fetchItems: () => void;
  loading: boolean;
}

const ProductsHeader: React.FunctionComponent<ProductsHeaderProps> = ({
  fetchItems,
  loading
}: ProductsHeaderProps): React.ReactElement => {
  const {
    state: {
      brandList,
      typeList,
      filterBrand,
      filterType,
      sortDirection,
      sortField
    },
    dispatch
  } = useContext(ProductListContext);

  return (
    <ProductsHeaderContainer>
      <div>
        <label>Filter By:</label>
        <Select
          value={filterType}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch({
              type: ProductListReducerActionType.SET_FILTER_TYPE,
              payload: event.target.value
            })
          }
          defaultOptionLabel="All Types"
          defaultOptionValue=""
          optionList={typeList}
          renderOption={type => (
            <option key={type} value={type}>
              {type}
            </option>
          )}
        ></Select>
        <Select
          value={filterBrand}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch({
              type: ProductListReducerActionType.SET_FILTER_BRAND,
              payload: event.target.value
            })
          }
          defaultOptionLabel="All Brands"
          defaultOptionValue=""
          optionList={brandList}
          renderOption={brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          )}
        ></Select>
      </div>
      <div>
        <label>Sort By:</label>
        <Select
          value={sortField}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch({
              type: ProductListReducerActionType.SET_ORDER_FIELD,
              payload: {
                sortField: event.target.value,
                sortDirection: sortDirection
              }
            })
          }
          defaultOptionLabel="Sort Field"
          defaultOptionValue=""
          optionList={productSortFields}
          renderOption={sortField => (
            <option key={sortField.value} value={sortField.value}>
              {sortField.text}
            </option>
          )}
        ></Select>
        <Select
          value={sortDirection}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            dispatch({
              type: ProductListReducerActionType.SET_ORDER_FIELD,
              payload: {
                sortField: sortField,
                sortDirection: event.target.value
              }
            })
          }
          defaultOptionLabel="Sort Direction"
          defaultOptionValue=""
          optionList={sortDirections}
          renderOption={sortDirection => (
            <option key={sortDirection.value} value={sortDirection.value}>
              {sortDirection.text}
            </option>
          )}
        ></Select>
      </div>
      <span>
        <Button primary disabled={loading} onClick={fetchItems}>
          Fetch Products
        </Button>
      </span>
    </ProductsHeaderContainer>
  );
};

export default ProductsHeader;
