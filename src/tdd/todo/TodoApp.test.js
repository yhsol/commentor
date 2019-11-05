import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("<TodoApp />", () => {
  it("renders TodoForm and TodoList", () => {
    const { getByText, getByTestId } = render(<TodoApp />);
    getByText("등록");
    getByTestId("TodoList");
  });

  it("renders two defaults todos", () => {
    const { getByText } = render(<TodoApp />);
    getByText("learn TDD");
    getByText("learn react test");
  });
});
