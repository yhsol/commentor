import { combineReducers } from "redux";
import countReducer from "./count";
import todos from "./todos";

const rootReducer = combineReducers({
  countReducer,
  todos
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
