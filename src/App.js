import { useState, useEffect } from "react";

// hooks can only be used inside React fxns, not class components
// hooks must always be called at the top level of the component

function ExampleChild() {
  useEffect(() => {
    console.log("Subscribing...");

    return () => {
      console.log("Unsubscribing...");
    };
  }, []);
  return <h2>I am the example child</h2>;
}

function App() {
  const [color, setColor] = useState("red");
  const [msg, setMsg] = useState("Initial Message");

  function changeColor() {
    // setColor("blue");
    color === "red" ? setColor("blue") : setColor("red");
  }

  function changeMsg() {
    setMsg("Super Secret Message");
  }

  return (
    <>
      <h1 style={{ background: color }}>React Hooks Demo</h1>
      <h1>{msg}</h1>
      <button onClick={changeColor}>Click Me</button>
      <button onClick={changeMsg}>Click Me</button>
      {msg === "Initial Message" && <ExampleChild />}
    </>
  );
}

export default App;
