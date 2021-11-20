import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SecondHandShoppingView from "./components/2ndHandShoppingView";
import NormalShoppingView from "./components/NormalShoppingView";
import SellingForm from "./components/SellingForm";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="top-header">
      <img src="/marimekko.png" alt="logo" height="40px" />
      </div>
      <div className="nav">
        <Link className="nav-link" to="/">Women</Link>
        <span className="nav-link">Men</span>
        <span className="nav-link">Children</span>
        <span className="nav-link">Stuff</span>
        <Link className="nav-link" to="/second">Pre-loved</Link>
        <Link className="nav-link" to="/form">Sell</Link>
      </div>
      <Routes>
        <Route path="/" element={<NormalShoppingView />} />
        <Route path="/second" element={<SecondHandShoppingView />} />
        <Route path="/form" element={<SellingForm />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
