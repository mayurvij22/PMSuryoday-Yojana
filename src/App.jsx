import React from "react";

import Home from "./components/home/Home";

import { Routes, Route } from "react-router-dom";

import RoofApply from "./components/RoofApply/RoofApply";
function App() {
  return (
    <div className="bg-white ">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/apply" element={<RoofApply></RoofApply>}></Route>
      </Routes>
    </div>
  );
}

export default App;
