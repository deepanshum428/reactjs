import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("black");

  function changeColor(color) {
    setcolor(color);
  }

  return (
    <div
      className="w-full h-screen duration-200 bg-black"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => changeColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-[#ff0000] cursor-pointer"
          >
            click <span>for red</span>
          </button>
          <button
            onClick={() => changeColor("orange")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-[#ffa500] cursor-pointer"
          >
            click <span>for orange</span>
          </button>
          <button
            onClick={() => changeColor("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-[#ffff00] cursor-pointer"
          >
            click <span>for yellow</span>
          </button>
          <button
            onClick={() => changeColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-[#008000] cursor-pointer"
          >
            click <span>for green</span>
          </button>
          <button
            onClick={() => changeColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-[#0000ff] cursor-pointer"
          >
            click <span>for blue</span>
          </button>
          <button
            onClick={() => changeColor("indigo")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-[#4b0082] cursor-pointer"
          >
            click <span>for indigo</span>
          </button>
          <button
            onClick={() => changeColor("violet")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-[#ee82ee] cursor-pointer"
          >
            click <span>for violet</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
