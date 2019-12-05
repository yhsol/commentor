import { addTodo, toggleTodo, removeTodo } from "./actions";

// typescript type for action
export type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

// typescript type for state
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];
