import { combineReducers } from "redux";
import countReducer from "./count";
import todosReducer from "./todos";
import nasaPost from "./nasaPost";
import counterReducer from "./practice/modules/couter";
import todos from "../modules/practice/modules/todos";
import fetchReducer from "../../../stateManagement/modules/fetchPopularReducer";
import fetch from "../../../stateManagement/modules/fetchPopularReducer";
import fetchRecent from "../../../stateManagement/modules/fetchRecentReducer";
import fetchDetailReducer from "../../../stateManagement/modules/fetchDetailReducer";

const rootReducer = combineReducers({
  countReducer,
  todosReducer,
  nasaPost,
  counterReducer,
  todos,
  fetchReducer,
  fetch,
  fetchRecent,
  fetchDetailReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
