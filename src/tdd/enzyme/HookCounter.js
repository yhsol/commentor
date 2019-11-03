import React, { useState, useCallback } from "./node_modules/react";

const HookCounter = () => {
  const [number, setNumber] = useState(0);
  const onIncrease = useCallback(() => {
    setNumber(number + 1);
  }, [number]);
  const onDecrease = useCallback(() => {
    setNumber(number - 1);
  }, [number]);

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default HookCounter;
