export const MapContainer = () => {
  const numbers = [2, 4, 6, 8];

  const items = numbers.map((item) => <li key={item.toString()}>{item}</li>);
  return (
    <>
      <ul>{items}</ul>
    </>
  );
};
