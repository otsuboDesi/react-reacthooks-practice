import "./App.css";
// import { LoginControl } from "./components/LoginControl";
// import { IfContainer } from "./components/IfContainer";
// import { MapContainer } from "./components/MapContainer";
// import { EventContainer } from "./components/EventContainer";
// import { FormContainer } from "./components/FormContainer";
// import { InputSelectContainer } from "./components/InputSelectContainer";
// import { RadioContainer } from "./components/RadioContainer";
import { CheckBoxContainer } from "./components/CheckBoxContainer";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* <LoginControl />
      <IfContainer />
      <MapContainer />
      <EventContainer /> */}
      {/* <FormContainer /> */}
      {/* <InputSelectContainer /> */}
      {/* <RadioContainer /> */}
      <CheckBoxContainer />
    </div>
  );
};

export default App;
