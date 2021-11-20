import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SecondHandShoppingView from "./components/2ndHandShoppingView";
import NormalShoppingView from "./components/NormalShoppingView";
import SellingForm from "./components/SellingForm";
import SecondHandItemView from "./components/2ndHandItemView";
function App() {
  return (
    <Router>
    <div className="App">
      <div className="top-header">
      <img src="/marimekko.png" alt="logo" height="40px" />
      </div>
      <div className="nav">
        <Link className="nav-link" to="/">Clothing</Link>
        <span className="nav-link">Bag</span>
        <span className="nav-link">Accessories</span>
        <span className="nav-link">Home</span>
        <Link className="nav-link" to="/second">Pre-loved</Link>
      </div>
      <Routes>
        <Route path="/" element={<NormalShoppingView />} />
        <Route path="/second" element={<SecondHandShoppingView />} />
        <Route path="/form" element={<SellingForm />} />
        <Route path="/item" element={<SecondHandItemView />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
