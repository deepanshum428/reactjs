import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCount] = useState(0);
  // let counter = 0;

  const addValue = () => {
    setCount((previous) => previous + 1);
    console.log("start1");
    console.log(previous);
    setCount((previous) => previous + 1);
    console.log("start2");
    console.log(previous);
    setCount((previous) => previous + 1);
    console.log("start3");
    console.log(previous);
    setCount((previous) => previous + 1);
    console.log("start4");
    console.log(previous);
    setCount((previous) => previous + 1);
    console.log("start5");
    console.log(previous);
  };
  const removeValue = () => {
    if (counter === 0) return;
    setCount(counter - 1);
    console.log("start6");
  };

  return (
    <>
      <h1>React course with hitesh sir {counter}</h1>
      <h2>counter value: {counter} </h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: </p>
    </>
  );
}

export default App;
