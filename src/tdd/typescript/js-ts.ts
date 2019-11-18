import React from "react";

function merge<A, B>(a: A, b: B) {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: "1" });
function wrap<T>(param: T) {
  return {
    param
  };
}

const wrapped = wrap(10);

interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ["a", "b", "c"]
};

type ItemsType<T> = {
  list: T[];
};

const itemsType: ItemsType<string> = {
  list: ["a", "b", "c"]
};

function Queue<T>() {
  const list: T[] = [];

  function length() {
    return list.length;
  }

  function enqueue(item: T) {
    return list.push(item);
  }

  function dequeue() {
    return list.shift();
  }

  return { length, enqueue, dequeue };
}

const queue = Queue<number>();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
