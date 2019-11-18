import React, { useState, useReducer } from "react";

interface Information {
  name: string;
  description: string;
}

interface Todo {
  id: number;
  text: string;
  doen: boolean;
}

interface FormProps {
  onSubmit: (form: { name: string; description: string }) => void;
}

type Action = { type: "INCREASE" } | { type: "DECREASE" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("error!");
  }
}

function Count({ onSubmit }: FormProps) {
  const [form, setForm] = useState({
    name: "",
    description: ""
  });
  const { name, description } = form;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: ""
    });
  };

  const [info, setInfo] = useState<Information | null>(null);
  const [todo, setTodo] = useState<Todo[]>([]);
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);
  // const onIncrease = () => setCount(count + 1);
  // const onDecrease = () => setCount(count - 1);
  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={onChange} />
        <input type="text" name="description" onChange={onChange} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default Count;
