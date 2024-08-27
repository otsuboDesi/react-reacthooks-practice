import "./App.css";
// import { LoginControl } from "./cpmponents/LoginControl";
// import { IfContainer } from "./cpmponents/IfContainer";
// import { MapContainer } from "./cpmponents/MapContainer";
// import { EventContainer } from "./cpmponents/EventContainer";
import { FormContainer } from "./cpmponents/FormContainer";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* <LoginControl />
      <IfContainer />
      <MapContainer />
      <EventContainer /> */}
      <FormContainer />
    </div>
  );
};

export default App;
