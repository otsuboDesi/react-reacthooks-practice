import "./App.css";
import { SampleComponent } from "./conponents/SampleComponent";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <SampleComponent />
    </div>
  );
};

export default App;
