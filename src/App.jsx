import React from "react";
import "./App.css";

import { Link, Routes, Route } from "react-router-dom";
// import Home from "./compunents/Home";
import Products from "./compunents/Products";

const App = () => {
  return (
    <div>
      <nav>
    
        <Link to="/products">Products</Link>
      </nav>

      <hr />

      <Routes>
       
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
