import { useState } from "react";

import "./App.css";

const LogoutButton = (props) => (
  // eslint-disable-next-line react/prop-types
  <button onClick={props.toggleIsLoggedIn}>ログアウト</button>
);

const LoginButton = (props) => (
  // eslint-disable-next-line react/prop-types
  <button onClick={props.toggleIsLoggedIn}>ログイン</button>
);

const LoginControl = () => {
  const [isLoggedInState, setLoggedInState] = useState(false);

  const toggledIsLoggedIn = () => {
    setLoggedInState(!isLoggedInState);
  };

  if (isLoggedInState) {
    return <LogoutButton toggleIsLoggedIn={toggledIsLoggedIn} />;
  }
  return <LoginButton toggleIsLoggedIn={toggledIsLoggedIn} />;
};

const IfContainer = () => {
  const isReact = true;
  return (
    <div style={{ background: "lightgray", padding: 20, color: "gray" }}>
      <p>{isReact ? "Hello React!!!1" : "Hello!"}</p>
      {/* isReact === true */}
      {isReact && <p>Hello React!!!2</p>}
      {/* isReact === false */}
      <p>{isReact || "Hello React!!!3"}</p>
    </div>
  );
};

const MapContainer = () => {
  const numbers = [2, 4, 6, 8];

  const items = numbers.map((item) => <li key={item.toString()}>{item}</li>);
  return (
    <>
      <ul>{items}</ul>
    </>
  );
};

const EventContainer = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <input type="text" defaultValue="" onChange={(e) => handleChange(e)} />
      <input type="button" value="Button" onClick={handleClick} />
    </>
  );
};

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
