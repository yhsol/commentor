import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "learn TDD",
      done: true
    },
    {
      id: 2,
      text: "learn react test",
      done: true
    }
  ]);
  return (
    <>
      <TodoForm data-testid="helloworld" />
      <TodoList todos={todos} />
    </>
  );
};

export default TodoApp;
