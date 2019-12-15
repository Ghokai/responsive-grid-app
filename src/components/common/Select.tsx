import styled from "styled-components";
import React from "react";
const SelectWrapper = styled.select`
  height: 35px;
  background: white;
  color: black;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

interface SelectProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultOptionLabel: string;
  defaultOptionValue: string;
  optionList: any[];
  renderOption: (option: any) => React.ReactElement;
}

const Select: React.FunctionComponent<SelectProps> = ({
  value,
  onChange,
  defaultOptionLabel,
  defaultOptionValue,
  optionList,
  renderOption
}: SelectProps): React.ReactElement => {
  return (
    <SelectWrapper value={value} onChange={onChange}>
      <option value={defaultOptionValue}>{defaultOptionLabel}</option>
      {optionList.map(renderOption)}
    </SelectWrapper>
  );
};

export default Select;
