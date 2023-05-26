import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

function navbar()

const AppNavbar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#219EBC' }} variant="dark">
      <Link to="/home" className="navbar-brand">
        <img src={'https://i.imgur.com/JWMUQKu.png'} alt="Logo" width="70" height="45" /> {/* Imagem da logo */}
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto justify-content-start"> {/* Adicionando a classe justify-content-start */}
        <NavDropdown title="Postagens" id="collasible-nav-dropdown" style={{ color: 'white' }}>
            <NavDropdown.Item as={Link} to="/formulariopostagens">Cadastrar Postagem</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/postagens">Listar Postagens</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Temas" id="collasible-nav-dropdown" style={{ color: 'white' }}>
          <NavDropdown.Item as={Link} to="/formulariotema">Cadastrar Tema</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/temas">Listar Temas</NavDropdown.Item>
          </NavDropdown>


          <NavDropdown title="Social" id="collasible-nav-dropdown" style={{ color: 'white' }}>
            <NavDropdown.Item as={Link} to="/action1">Perfil</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/action2">Configurações</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/separated-link">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
