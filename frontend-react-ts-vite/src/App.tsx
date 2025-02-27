import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HouseList from "./components/HouseList";
import HouseDetails from "./components/HouseDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HouseList />} />
        <Route path="/houses/:id" element={<HouseDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
