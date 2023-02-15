import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ClassComponent from "./ClassComponent";
import ClassComponent2 from "./ClassComponent2";
import CardDetails from "./CardDetails/CardDetails";
import FunctionComponent1 from "./FunctionComponent1";

const numbers = [
  { num: 1, class: "cl1" },
  { num: 2, class: "cl2" },
  { num: 3, class: "cl3" },
  { num: 4, class: "cl4" },
  { num: 5, class: "cl5" },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClassComponent numbers={numbers} />} />
        <Route path="/next" element={<ClassComponent2 numbers={numbers} />} />
        <Route path="/cards" element={<FunctionComponent1 />} />
        <Route path="/cards/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;
