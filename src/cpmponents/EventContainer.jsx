export const EventContainer = () => {
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
