// 액션 타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_BY = "counter/INCREASE_By";
const DECREASE_BY = "counter/DECREASE_BY";

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = diff => ({
  type: INCREASE_BY,
  payload: diff
});
export const decreaseBy = diff => ({
  type: DECREASE_BY,
  payload: diff
});

// 액션 객체들에 대한 타입스크립트 타입
// type CounterAction =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>
//   | ReturnType<typeof decreaseBy>;

// state의 타입스크립트 타입과 initial state
// type CounterState = {
//   count: number
// };

const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
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
