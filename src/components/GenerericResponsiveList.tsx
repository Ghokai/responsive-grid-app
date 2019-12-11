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

interface GenerericResponsiveList {
  items: any[];
  children(item: any): JSX.Element; //render props pattern
}

const GenerericResponsiveList: React.FC<GenerericResponsiveList> = (
  props: GenerericResponsiveList
): React.ReactNode => {
  return (
    <ListContainer>
      {props.items.map(item => props.children(item))}
    </ListContainer>
  );
};

export default GenerericResponsiveList;
