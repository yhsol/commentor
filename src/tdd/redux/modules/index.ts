import { combineReducers } from "redux";
import countReducer from "./count";
import todosReducer from "./todos";

const rootReducer = combineReducers({
  countReducer,
  todosReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
