import React from "react";
import TodoItem from "./TodoItem";
import useTodos from "../hooks/useTodos";

function TodoList() {
  const todos = useTodos(); // TODO: listing with custom hooks
  if (todos.length === 0) return <p>no todo list</p>;

  return (
    <>
      <ul>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
