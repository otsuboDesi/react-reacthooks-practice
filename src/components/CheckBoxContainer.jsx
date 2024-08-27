import { useState } from "react";

export const CheckBoxContainer = () => {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleChange = (e) => {
    if (checkedValues.includes(e.target.value)) {
      setCheckedValues(
        checkedValues.filter((checkedValue) => checkedValue !== e.target.value)
      );
    } else {
      setCheckedValues([...checkedValues, e.target.value]);
    }
  };
  return (
    <>
      <p>
        Selected value :<b>{checkedValues.join(",")}</b>
      </p>
      <label>
        <input
          type="checkbox"
          value="Mouse"
          onChange={handleChange}
          checked={checkedValues.includes("Mouse")}
        />
        Mouse
      </label>
      <label>
        <input
          type="checkbox"
          value="Monitor"
          onChange={handleChange}
          checked={checkedValues.includes("Monitor")}
        />
        Monitor
      </label>
      <label>
        <input
          type="checkbox"
          value="Keyboard"
          onChange={handleChange}
          checked={checkedValues.includes("Keyboard")}
        />
        Keyboard
      </label>
    </>
  );
};
