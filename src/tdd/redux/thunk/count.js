import { handleActions, createAction } from "redux-actions";

const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase);
  }, 1000);
};

export const decreaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease);
  }, 1000);
};

export default handleActions(
  {
    [INCREASE]: (state, action) => state + 1,
    [DECREASE]: (state, action) => state - 1
  },
  0
);
