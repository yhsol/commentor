import { createActions, handleActions } from "redux-actions";

// action type
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const REMOVE_TODO = "todos/REMOVE_TODO";

export const addTodo = createActions(ADD_TODO);
export const toggleTodo = createActions(TOGGLE_TODO);
export const removeTodo = createActions(REMOVE_TODO);

const initiailState = [
  { id: 1, text: "1", done: true },
  { id: 2, text: "2", done: true },
  { id: 3, text: "3", done: false }
];

const reducer = {
  [ADD_TODO]: (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map(todo => todo.id)) + 1,
      text,
      done: false
    }),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map(todo => {
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    }),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter(todo => todo.id !== id)
};

export const todosReducer = handleActions(reducer, initiailState);
