import { combineReducers } from "redux";
import countReducer from "./count";
import todosReducer from "./todos";
import nasaPost from "./nasaPost";
import counterReducer from "./practice/modules/couter";
import todos from "../modules/practice/modules/todos";
import fetchReducer from "../../../stateManagement/modules/fetch/fetchPopularReducer";
import fetch from "../../../stateManagement/modules/fetch/fetchPopularReducer";
import fetchRecent from "../../../stateManagement/modules/fetch/fetchRecentReducer";
import fetchDetailReducer from "../../../stateManagement/modules/fetch/fetchDetailReducer";

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
