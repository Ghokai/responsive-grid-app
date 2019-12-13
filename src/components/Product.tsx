import React from "react";
import styled from "styled-components";
import ProductModel from "../models/productModel";

const ProductContainer = styled.div`
  & a {
    color: #000;
    text-decoration: none;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-out;

    & img {
      max-width: 100%;
      height: auto;
    }

    &:hover {
      transform: scale(1.05);
      transition: 0.4s ease-out;
      opacity: 0.8;
    }

    & div.name {
      font-weight: 600;
      text-align: center;
    }

    & div.type {
      color: #a9a9a9;
    }

    & div.rating {
      & span {
        background-color: #149414;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
      }

      z-index: 1;
      width: 100%;
      font-weight: 600;
      text-align: right;
      margin-right: 20px;
    }
  }
`;

interface ProductProps {
  product: ProductModel;
}
const Product: React.FunctionComponent<ProductProps> = ({
  product: { id, name, slug, brand, type, image, price, size, rating }
}: ProductProps): React.ReactElement => {
  const convertToReadablePrice = (price: number): string => {
    const priceStr = price.toString();
    return `ab ${priceStr.substring(0, priceStr.length - 2) +
      "," +
      priceStr.substring(2, priceStr.length)} €`;
  };
  return (
    <ProductContainer>
      <a href={`https://www.flaconi.de/${slug}`}>
        <div className="rating">
          <span title="rating">{rating}%</span>
        </div>
        <img src={image} alt={id} />
        <div>{brand}</div>
        <div className="name">{name}</div>
        <div className="type">{type}</div>
        <div>
          {convertToReadablePrice(price)} / {size.toLocaleLowerCase()}
        </div>
      </a>
    </ProductContainer>
  );
};

export default React.memo(Product);
