import { useState } from "react";

export const RadioContainer = () => {
  const [checkedValue, setCheckedValue] = useState("red");

  const handleChange = (e) => {
    setCheckedValue(e.target.value);
  };
  return (
    <>
      <p>
        Selected value :<b>{checkedValue}</b>
      </p>
      <label>
        <input
          type="radio"
          value="red"
          onChange={handleChange}
          checked={checkedValue === "red"}
        />
        Red
      </label>
      <label>
        <input
          type="radio"
          value="blue"
          onChange={handleChange}
          checked={checkedValue === "blue"}
        />
        Blue
      </label>
      <label>
        <input
          type="radio"
          value="yellow"
          onChange={handleChange}
          checked={checkedValue === "yellow"}
        />
        Yellow
      </label>
    </>
  );
};
