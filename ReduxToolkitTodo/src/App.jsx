import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Todos from "./components/Todos";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <h1 className="flex justify-center mt-5 text-2xl font-bold">
        Learn Redux Toolkit
      </h1>
      <AddTodo />
      <Todos />
      <Card />
    </Provider>
  );
}

export default App;
