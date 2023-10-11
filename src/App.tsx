import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:params" element={<Products />} />
            <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
