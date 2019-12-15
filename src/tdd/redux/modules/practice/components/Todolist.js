import React from "react";
import TodoItem from "./TodoItem";
import { useTodosAll } from "../hooks/useTodosAll";

function Todolist() {
  //   const todos = []; // with hooks -> const {todos} = useTodosAll();
  const todos = useTodosAll.useTodoslist();
  if (todos.length === 0) return <p>no list</p>;

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default Todolist;
