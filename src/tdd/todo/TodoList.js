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

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default TodoList;
