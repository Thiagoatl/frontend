import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contatos from './paginas/contatos/Contatos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contatos" element={<Contatos/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
