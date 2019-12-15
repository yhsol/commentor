import React, { useState } from "react";
import { useTodosAll } from "../hooks/useTodosAll";

function TodoInsert() {
  const [value, setValue] = useState("");
  const addTodo = useTodosAll.useAddTodo();

  const onChange = e => {
    setValue(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="todos" value={value} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoInsert;
