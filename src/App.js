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
      <h1>Marimekko</h1>
      <div>
        <Link to="/">Women</Link>|
        <a>Men</a>|
        <a>Children</a>|
        <a>Stuff</a>|
        <Link to="/second">SecondHand</Link>|
        <Link to="/form">Sell</Link>

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
