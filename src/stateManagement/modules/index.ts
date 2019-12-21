import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import fetchPopularReducer from "../modules/fetch/fetchPopularReducer";
import fetchRecent from "../modules/fetch/fetchRecentReducer";
import fetchDetailReducer from "../modules/fetch/fetchDetailReducer";

import fetchReducer from "../modules/fetch/fetchPopularReducer";
import fetch from "../modules/fetch/fetchPopularReducer";

const rootReducer = combineReducers({
  counterReducer,
  fetchPopularReducer,
  fetchRecent,
  fetchDetailReducer,

  fetchReducer,
  fetch
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
