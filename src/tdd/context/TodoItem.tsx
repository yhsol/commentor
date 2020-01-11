import React from "react";
import "./TodoItem.css";
import { Todo, useTodosDispatch } from "./context/TodosContext";

export type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      id: todo.id
    });
  };

  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id: todo.id
    });
  };
  return (
    <div>
      <li className={`TodoItem ${todo.done ? "done" : ""}`}>
        <span className="text" onClick={onToggle}>
          {todo.text}
        </span>
        <span className="remove" onClick={onRemove}>
          (X)
        </span>
      </li>
    </div>
  );
}

export default TodoItem;
