import React, { useReducer } from "react";

type Action = { type: "INCREASE" } | { type: "DECREASE" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Error!");
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });

  type Items<T> = {
    list: T[];
  };

  const items: Items<number> = {
    list: [1, 2, 3]
  };

  class Queue<T> {
    list: T[] = [];
    get length() {
      return this.list.length;
    }
    enqueue(item: T) {
      this.list.push(item);
    }
    dequeue() {
      return this.list.shift();
    }
  }

  const queue = new Queue<string>();
  queue.enqueue("0");
  queue.enqueue("1");
  queue.enqueue("2");
  queue.enqueue("3");
  queue.enqueue("4");
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());
  console.log(queue.dequeue());

  function merge<A, B>(a: A, b: B): A & B {
    return {
      ...a,
      ...b
    };
  }

  const merged = merge({ foo: 1 }, { bar: 1 });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}

export default Counter;
