import React from "react";
import useCount from "../hooks/useCount";

function Count() {
  const {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
    onDecreaseBy
  } = useCount();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
      <button onClick={() => onDecreaseBy(5)}>-5</button>
    </div>
  );
}

export default Count;
