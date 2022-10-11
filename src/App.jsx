import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Components/Home";
import Task1MainFile from "./pages/Task1/Components/Task1MainFile";
import Task2 from "./pages/Task2/Components/Task2";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1MainFile />} />
        <Route path="/task2" element={<Task2 />} />
      </Routes>
    </>
  );
};

export default App;
