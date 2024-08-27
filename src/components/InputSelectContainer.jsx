import { useState } from "react";

export const InputSelectContainer = () => {
  const [selectedValue, setSelectedValue] = useState("HTML");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <>
      <p>{selectedValue}</p>
      <select value={selectedValue} onChange={handleChange}>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
      </select>
    </>
  );
};
