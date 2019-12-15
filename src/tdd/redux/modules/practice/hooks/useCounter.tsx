import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../..";
import { increase, decrease, increaseBy, decreaseBy } from "../modules/couter";

function useCounter() {
  const count = useSelector(
    (state: RootState) => state.countReducer.countState
  );
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback(
    (diff: number) => dispatch(increaseBy(diff)),
    [dispatch]
  );
  const onDecreaseBy = useCallback(
    (diff: number) => dispatch(decreaseBy(diff)),
    [dispatch]
  );

  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
    onDecreaseBy
  };
}

export default useCounter;
