import { useState, useEffect } from "react";

export const SampleComponent = () => {
  const INITIAL_COUNT = 0;
  const [count, setCount] = useState(INITIAL_COUNT);

  const callbackFunction = () => {
    document.title = `${count} time clicked`;
  };
  useEffect(callbackFunction, [count]);

  const countIncrement = () => setCount((pre) => pre + 1);
  const countReset = () => setCount(INITIAL_COUNT);

  return (
    <>
      <p>
        Current Count: {count}
        <br />
        Initial count value: {INITIAL_COUNT}
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={countIncrement}>+1 Button</button>
        <button onClick={countReset} style={{ background: "red" }}>
          Reset
        </button>
      </div>
    </>
  );
};
