import React, { useState, ChangeEvent, FormEvent } from "react";
import useAddTodo from "../hooks/useAddTodos";

function TodoInsert() {
  const [value, setValue] = useState("");
  const addTodo = useAddTodo();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input placeholder="todos" value={value} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default TodoInsert;
