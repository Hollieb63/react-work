import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
    console.log, "added", count;
  }

  function decrement() {
    setCount((count) => count - 1);
    console.log, "subtracted", count;
  }

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
      <span className="bg-red-500">{count}</span>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
