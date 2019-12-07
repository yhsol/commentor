import React from "react";
import useCount from "../hooks/useCount";

function CountPage({}) {
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
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
      <button onClick={() => onDecreaseBy(5)}>-5</button>
    </div>
  );
}

export default CountPage;
