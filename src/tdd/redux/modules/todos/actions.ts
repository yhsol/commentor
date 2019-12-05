// action type
export const ADD_TYPE = "todos/ADD_TYPE" as const;
export const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
export const REMOVE_TODO = "todos/REMOVE_TODO" as const;

// action creator
export const addTodo = (text: string) => ({
  type: ADD_TYPE,
  payload: text
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id
});
