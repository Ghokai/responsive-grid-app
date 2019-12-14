import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./common/Button";
import Select from "./common/Select";
import {
  ProductListActionType,
  ProductListContext
} from "./ProductListContext";
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
  @media ${DeviceSize.deviceWidths.tablet} {
    height: 180px;
    & > span {
      float: left;
    }
  }
  @media ${DeviceSize.deviceWidths.laptop} {
    height: 60px;
    & > span {
      float: right;
    }
  }
  background-color: #ffe6ee;
  display: flex;
  padding: 10px 20px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & > div {
    margin: 10px 10px;
    @media ${DeviceSize.deviceWidths.tablet} {
      flex: 1 0 80%;
    }
    @media ${DeviceSize.deviceWidths.laptop} {
      flex: 1 0 30%;
    }
  }
`;

interface ProductsHeaderProps {
  fetchItems: () => Promise<void>;
}

const ProductsHeader: React.FunctionComponent<ProductsHeaderProps> = ({
  fetchItems
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
          onChange={event =>
            dispatch({
              type: ProductListActionType.SET_FILTER_TYPE,
              payload: event.target.value
            })
          }
        >
          <option value="">All Types</option>
          {typeList.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
        <Select
          value={filterBrand}
          onChange={event =>
            dispatch({
              type: ProductListActionType.SET_FILTER_BRAND,
              payload: event.target.value
            })
          }
        >
          <option value="">All Brands</option>
          {brandList.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <label>Sort By:</label>
        <Select
          value={sortField}
          onChange={event =>
            dispatch({
              type: ProductListActionType.SET_ORDER_FIELD,
              payload: {
                sortField: event.target.value,
                sortDirection: sortDirection
              }
            })
          }
        >
          <option value="">Sort Field</option>
          {productSortFields.map(sortField => (
            <option key={sortField.value} value={sortField.value}>
              {sortField.text}
            </option>
          ))}
        </Select>
        <Select
          value={sortDirection}
          onChange={event =>
            dispatch({
              type: ProductListActionType.SET_ORDER_FIELD,
              payload: {
                sortField: sortField,
                sortDirection: event.target.value
              }
            })
          }
        >
          <option value="">Sort Direction</option>
          {sortDirections.map(sortDirection => (
            <option key={sortDirection.value} value={sortDirection.value}>
              {sortDirection.text}
            </option>
          ))}
          ))}
        </Select>
      </div>
      <span>
        <Button primary onClick={fetchItems}>
          Fetch Products
        </Button>
      </span>
    </ProductsHeaderContainer>
  );
};

export default ProductsHeader;
