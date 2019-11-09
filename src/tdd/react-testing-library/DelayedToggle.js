import React, { useState, useCallback } from "react";

function DelayedToggle() {
  const [toggle, setToggle] = useState(false);

  const onToggle = useCallback(() => {
    setTimeout(() => {
      setToggle(toggle => !toggle);
    }, 1000);
  }, []);

  return (
    <div>
      <button onClick={onToggle}>toggle</button>
      <div>
        state: <span>{toggle ? "ON" : "OFF"}</span>
      </div>
      {toggle && <div>yeah!</div>}
    </div>
  );
}

export default DelayedToggle;
