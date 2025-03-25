import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter as Router,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/github.jsx";
import Contact from "./components/Contact/Contact.jsx";

const router = Router(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/user" element={<User />}>
        <Route path=":userId" element={<User />}></Route>
      </Route>
      <Route
        loader={githubInfoLoader}
        path="github/"
        element={<Github />}
      ></Route>
      <Route
        path="*"
        element={
          <div className="items-center justify-center text-center bg-red-500 text-2xl text-black">
            Not found
          </div>
        }
      ></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>
);
