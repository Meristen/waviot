import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Navbar from "../components/navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;