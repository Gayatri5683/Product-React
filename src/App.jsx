import React from 'react';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  

  return (
    <>
    
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </>
  )
}

export default App
