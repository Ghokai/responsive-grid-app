import React from "react";
import styled from "styled-components";
import DeviceSize from "../utils/deviceSize";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > div {
    @media ${DeviceSize.deviceWidths.mobileS} {
      flex: 1 0 90%;
    }
    @media ${DeviceSize.deviceWidths.mobileL} {
      flex: 1 0 48%;
    }
    @media ${DeviceSize.deviceWidths.tablet} {
      flex: 1 0 32%;
    }
    @media ${DeviceSize.deviceWidths.laptopL} {
      flex: 1 0 23%;
    }
  }
`;

interface GenericResponsiveListProps {
  items: any[]; //it is generic component it does not need know what is actual type of items
  children: (item: any) => JSX.Element; //render props pattern
}

const GenericResponsiveList: React.FC<GenericResponsiveListProps> = (
  props: GenericResponsiveListProps
): React.ReactNode => {
  return (
    <ListContainer>
      {props.items.map(item => props.children(item))}
    </ListContainer>
  );
};

export default GenericResponsiveList;
