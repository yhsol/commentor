import React from "react";
import { createAction, ActionType, createReducer } from "typesafe-actions";

// action type
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";
const INCREASE_BY = "count/INCREASE_BY";
const DECREASE_BY = "count/DECREASE_BY";

// action creator
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();
export const decreaseBy = createAction(DECREASE_BY)<number>();

// typescript type for action creator
const actions = { increase, decrease, increaseBy, decreaseBy };

type CountAction = ActionType<typeof actions>;

//  state type, initial state
type CountState = {
  count: number;
};

const initialState: CountState = {
  count: 0
};

// reducer
// function countReducer(state: CountState = initialState, action: CountAction) {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     case DECREASE_BY:
//       return { count: state.count - action.payload };
//     default:
//       return state;
//   }
// }

const countReducer = createReducer<CountState, CountAction>(initialState, {
  [INCREASE]: state => ({ count: state.count + 1 }),
  [DECREASE]: state => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
  [DECREASE_BY]: (state, action) => ({ count: state.count - action.payload })
});

export default countReducer;
