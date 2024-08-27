import { useState } from "react";

const LogoutButton = (props) => (
  // eslint-disable-next-line react/prop-types
  <button onClick={props.toggleIsLoggedIn}>ログアウト</button>
);

const LoginButton = (props) => (
  // eslint-disable-next-line react/prop-types
  <button onClick={props.toggleIsLoggedIn}>ログイン</button>
);

export const LoginControl = () => {
  const [isLoggedInState, setLoggedInState] = useState(false);

  const toggledIsLoggedIn = () => {
    setLoggedInState(!isLoggedInState);
  };

  if (isLoggedInState) {
    return <LogoutButton toggleIsLoggedIn={toggledIsLoggedIn} />;
  }
  return <LoginButton toggleIsLoggedIn={toggledIsLoggedIn} />;
};
