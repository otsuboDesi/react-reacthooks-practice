import "./App.css";
import { CountContainer } from "./conponents/CounterContainer";
import { HelloContainer } from "./conponents/HelloContainer";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <CountContainer />
      <HelloContainer />
    </div>
  );
};

export default App;
