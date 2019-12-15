const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const REMOVE_TODO = "todos/REMOVE_TODO";

export const addTodo = text => ({
  type: ADD_TODO,
  payload: text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id
});

const initialState = [
  { id: 1, text: "1", done: true },
  { id: 2, text: "2", done: true },
  { id: 3, text: "3", done: false }
];

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
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
