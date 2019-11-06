import React, { useState, useCallback } from "react";

// interface Props {
//   todo: {
//     id: number;
//     text: string;
//     done: boolean;
//   };
//   onToggle: jest.Mock<any, any>;
//   onRemove: jest.Mock<any, any>;
// }

function TodoItem({ todo, onToggle, onRemove }) {
  const { id, text, done } = todo;
  const toggle = useCallback(() => onToggle(id), [id, onToggle]);
  const remove = useCallback(() => onRemove(id), [id, onRemove]);

  return (
    <li>
      <span
        style={{ textDecoration: done ? "line-through" : "none" }}
        onClick={toggle}
      >
        {text}
      </span>
      <button onClick={remove}>delete</button>
    </li>
  );
}

export default React.memo(TodoItem);
