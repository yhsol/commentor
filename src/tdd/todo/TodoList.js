import React from "react";
import TodoItem from "./TodoItem";

// interface TodoList {
//   todos: [
//     {
//       id: number,
//       text: string,
//       done: boolean
//     }
//   ];
// }

function TodoList({ todos }) {
  return (
    <li>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </li>
  );
}

export default TodoList;
