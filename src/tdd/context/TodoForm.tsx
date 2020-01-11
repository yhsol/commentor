import React, { useState } from "react";
import { useTodosDispatch } from "./context/TodosContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      text: value
    });
    setValue("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="todo!"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TodoForm;
