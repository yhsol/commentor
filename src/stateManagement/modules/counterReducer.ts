// action type
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;
const DECREASE_BY = "counter/INCREASE_BY" as const;

// action creator
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increase_by = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff
});
export const decrease_by = (diff: number) => ({
  type: DECREASE_BY,
  payload: diff
});

// typescript type for action
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increase_by>
  | ReturnType<typeof decrease_by>;

// typescript type for state, initial state
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

function counterReducer(
  state: CounterState = initialState,
  action: CounterAction
) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    case DECREASE_BY:
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export default counterReducer;
