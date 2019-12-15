import React from "react";
import { mount } from "enzyme";
import Select from "./Select";

describe("Select", () => {
  it("Select renders correctly", () => {
    const onChangeHandler = jest.fn();
    const options = ["one", "two", "three"];
    const renderOption = (text: string) => (
      <option key={text} value={text}>
        {text}
      </option>
    );
    const wrapper = mount(
      <Select
        value=""
        onChange={onChangeHandler}
        defaultOptionLabel="Please Choose"
        defaultOptionValue=""
        optionList={options}
        renderOption={renderOption}
      ></Select>
    );

    wrapper.find("select").simulate("change", { target: { value: "two" } });

    expect(onChangeHandler).toHaveBeenCalled();
  });
});
