import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("<TodoList />", () => {
  const sampleTodos = [
    {
      id: 1,
      text: "learn react test",
      done: true
    },
    {
      id: 2,
      text: "learn react test2",
      done: false
    }
  ];

  it("renders todos properly", () => {
    const { getByText } = render(<TodoList todos={sampleTodos} />);
    getByText(sampleTodos[0].text);
    getByText(sampleTodos[1].text);
  });

  it("calls onToggle and onRemove", () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    const { getByText, getAllByText } = render(
      <TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />
    );

    fireEvent.click(getByText(sampleTodos[0].text));
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);

    fireEvent.click(getAllByText("delete")[0]);
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
