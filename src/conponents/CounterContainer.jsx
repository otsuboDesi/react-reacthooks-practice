import { useState } from "react";

export const CountContainer = () => {
  const INITIAL_COUNT = 0;
  const [count, setCount] = useState(INITIAL_COUNT);

  const countIncrement = () => setCount((pre) => pre + 1);

  const countDecriment = () => setCount((pre) => pre - 1);

  const countReset = () => setCount(INITIAL_COUNT);

  return (
    <>
      <p>
        Current Count: {count}
        <br />
        Initial count value: {INITIAL_COUNT}
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={countIncrement}>Increment</button>
        <button onClick={countDecriment}>Decrement</button>
        <button onClick={countReset} style={{ background: "red" }}>
          Reset
        </button>
      </div>
    </>
  );
};
