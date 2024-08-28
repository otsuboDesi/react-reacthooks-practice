import { useState } from "react";

export const HelloContainer = () => {
  const INITIAAL_NAME = "JavaScript";

  const [name, setName] = useState(INITIAAL_NAME);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
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
    </>
  );
};
