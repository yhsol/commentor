import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
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

  it("creates new todo", () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);

    fireEvent.change(getByPlaceholderText("write todo thing!"), {
      target: {
        value: "add new todo"
      }
    });
    fireEvent.click(getByText("등록"));
    getByText("add new todo");
  });

  it("toggles todo", () => {
    const { getByText } = render(<TodoApp />);
    const todoText = getByText("learn TDD");
    expect(todoText).toHaveStyle("text-decoration: line-through");
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle("text-decoration: line-through");
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: line-through");
  });
  it("removes todo", () => {
    const { getByText } = render(<TodoApp />);
    const todoText = getByText("learn TDD");
    const removeButton = todoText.nextSibling;
    fireEvent.click(removeButton);
    expect(todoText).not.toBeInTheDocument();
  });
});
