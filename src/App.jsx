import "./App.css";
import { CountContainer } from "./conponents/CounterContainer";
import { NameContainer } from "./conponents/NameContainer";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <CountContainer />
      <NameContainer />
    </div>
  );
};

export default App;
