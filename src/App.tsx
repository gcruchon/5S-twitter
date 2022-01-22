import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Menu from "./Menu";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
