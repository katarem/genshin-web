import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import CharacterView from "./routes/CharacterView";
import Home from "./routes/Home.jsx";
import { RouterProvider, createBrowserRouter, } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/characters/:characterId",
    element: <CharacterView/>,
  }
]);
 
 root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  );


 