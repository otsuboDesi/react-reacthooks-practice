import "./App.css";
import { LoginControl } from "./cpmponents/LoginControl";
import { IfContainer } from "./cpmponents/IfContainer";
import { MapContainer } from "./cpmponents/MapContainer";
import { EventContainer } from "./cpmponents/EventContainer";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <LoginControl />
      <IfContainer />
      <MapContainer />
      <EventContainer />
    </div>
  );
};

export default App;
