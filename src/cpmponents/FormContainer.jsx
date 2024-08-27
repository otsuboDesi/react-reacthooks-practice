import { useState } from "react";

export const FormContainer = () => {
  const [inputTextValue, setInputTextValue] = useState("");
  const [text, setText] = useState("JavaScript");

  const handleChange = (e) => {
    setInputTextValue(e.target.value);
  };

  const handleClick = () => {
    setText(inputTextValue);
    setInputTextValue("");
  };
  return (
    <>
      <h1>I love {text}!!!</h1>
      <div style={{ display: "flex", gap: 10 }}>
        <input type="text" value={inputTextValue} onChange={handleChange} />
        <input type="button" value="入力" onClick={handleClick} />
      </div>
    </>
  );
};
