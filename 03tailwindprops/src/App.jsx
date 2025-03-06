import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/card.jsx";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "Deepanshu",
    age: "25",
    address: {
      town: "Rehti",
      city: "Sehore",
      country: "India",
    },
  };

  let newArray = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-6 rounded-xl">
        Vite with tailwind
      </h1>
      <Card
        userName="Deepanshu"
        post="Software Engineer"
        img="https://plus.unsplash.com/premium_photo-1671987552220-973918c6f3dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D"
        myArray={newArray}
      />
      <Card userName="Jhon" post="staff eng., us" />
      <Card data={myObj.age} />
    </>
  );
}

export default App;
