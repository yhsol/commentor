import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm />", () => {
  const setUp = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText("write todo thing!");
    const button = getByText("등록");
    return {
      ...utils,
      input,
      button
    };
  };
  it("has input and a button", () => {
    const { input, button } = setUp();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });
  it("change input", () => {
    const { input } = setUp();
    fireEvent.change(input, {
      target: {
        value: "learn react test"
      }
    });
    expect(input).toHaveAttribute("value", "learn react test");
  });
  it("calls onInsert and clrears input", () => {
    const onInsert = jest.fn();
    const { input, button } = setUp({ onInsert });
    fireEvent.change(input, {
      target: {
        value: "learn react test"
      }
    });
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("learn react test");
    expect(input).toHaveAttribute("value", "");
  });
});
