import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="flex space-x-4 mb-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/employees" className="text-blue-600 hover:underline">
            Employees
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
