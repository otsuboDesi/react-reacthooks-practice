import { useState } from "react";
import "./App.css";

const App = () => {
  const INITIAL_COUNT = 0;
  const INITIAAL_NAME = "JavaScript";

  const [count, setCount] = useState(INITIAL_COUNT);
  const [name, setName] = useState(INITIAAL_NAME);

  const countIncrement = () => setCount((pre) => pre + 1);

  const countDecriment = () => setCount((pre) => pre - 1);

  const countReset = () => setCount(INITIAL_COUNT);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
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

      <p>
        Hello, {name}!!!!
        <br />
        Initial Name value: {INITIAAL_NAME}
      </p>
      <input
        type="text"
        onChange={(e) => {
          handleChangeName(e);
        }}
      />
    </div>
  );
};

export default App;
