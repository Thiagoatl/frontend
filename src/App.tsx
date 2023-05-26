import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import ListaTema from './components/temas/listaTema/ListaTema';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contatos from './paginas/contatos/Contatos';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroPostagem from './components/postagens/CadastroPostagem/CadastroPostagem';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import store from './store/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux';


function App() {
  return ( 
    <>
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/postagens" element={<ListaPostagem />} />
          <Route path="/formularioPostagens" element={<CadastroPostagem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
