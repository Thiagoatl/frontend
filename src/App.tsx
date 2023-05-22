import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contatos from './paginas/contatos/Contatos';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{minHeight:'100vh'}}>
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
