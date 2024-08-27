export const IfContainer = () => {
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
