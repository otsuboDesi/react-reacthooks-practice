import "./App.css";
// import { LoginControl } from "./components/LoginControl";
// import { IfContainer } from "./components/IfContainer";
// import { MapContainer } from "./components/MapContainer";
// import { EventContainer } from "./components/EventContainer";
// import { FormContainer } from "./components/FormContainer";
import { InputSelectContainer } from "./components/InputSelectContainer";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* <LoginControl />
      <IfContainer />
      <MapContainer />
      <EventContainer /> */}
      {/* <FormContainer /> */}
      <InputSelectContainer />
    </div>
  );
};

export default App;
