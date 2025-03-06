// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="http://google.com" target="_blank">
    visit Google page
  </a>
);

const areactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google",
  username
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
