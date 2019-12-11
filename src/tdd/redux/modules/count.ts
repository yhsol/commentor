import {
  createAction,
  ActionType,
  createReducer,
  action
} from "typesafe-actions";

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

// typescript type for action
const actions = { increase, decrease, increaseBy, decreaseBy };
type CountAction = ActionType<typeof actions>;

// state => type for state, initial state
type CountState = {
  countState: number;
};

const initialState: CountState = {
  countState: 0
};

// reducer
const countReducer = createReducer<CountState, CountAction>(initialState, {
  [INCREASE]: state => ({ countState: state.countState + 1 }),
  [DECREASE]: state => ({ countState: state.countState - 1 }),
  [INCREASE_BY]: (state, action) => ({
    countState: state.countState + action.payload
  }),
  [DECREASE_BY]: (state, action) => ({
    countState: state.countState - action.payload
  })
});

// function countReducer(state: CountState = initialState, action: CountAction) {
//   switch (action.type) {
//     case INCREASE:
//       return { countState: state.countState + 1 };
//     case DECREASE:
//       return { countState: state.countState - 1 };
//     case INCREASE_BY:
//       return { countState: state.countState + action.payload };
//     case DECREASE_BY:
//       return { countState: state.countState - action.payload };
//     default:
//       return state;
//   }
// }

export default countReducer;
