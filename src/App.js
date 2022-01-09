import { useState } from "react";

// hooks can only be used inside React fxns, not class components
// hooks must always be called at the top level of the component

function App() {
  const [color, setColor] = useState("red");

  const [msg, setMsg] = useState("");

  function handleClick() {
    // setColor("blue");
    color === "red" ? setColor("blue") : setColor("red");
    setMsg("Super Secret Message");
  }

  return (
    <>
      <h1 style={{ background: color }}>React Hooks Demo</h1>
      <h1>{msg}</h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
