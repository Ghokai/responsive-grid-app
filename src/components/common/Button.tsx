import styled from "styled-components";

const Button = styled.button<{ primary?: boolean }>`
  height: 35px;
  font-size: 14px;
  padding: 5px 10px;
  color: #000;
  background-color: ${props => (props.primary ? "#72bcd4" : "#fff")};
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: ${props => (props.primary ? "#c1e1ec" : "#000")};
  }
`;

export default Button;
