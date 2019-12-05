import { TodosState, TodosAction } from "./types";
import { ADD_TYPE, TOGGLE_TODO, REMOVE_TODO } from "./actions";

// initial state
const initialState: TodosState = [
  { id: 1, text: "learn typescript", done: true },
  { id: 2, text: "learn typescript2", done: true },
  { id: 3, text: "learn typescript3", done: false }
];

// reducer
function todos(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TYPE:
      const nextId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: nextId,
        text: action.payload,
        done: false
      });
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;
