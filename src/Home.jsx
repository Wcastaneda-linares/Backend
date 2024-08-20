import React from 'react';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import './Home.css'; // Estilos personalizados

function Home() {
  const username = "Usuario"; // Este sería el nombre del usuario logueado

  const handleLogout = () => {
    console.log('Cerrando sesión...');
    // Lógica para cerrar sesión
  };

  return (
    <Container fluid className="home-container">
      <Row className="top-bar">
        <Col className="d-flex justify-content-end align-items-center">
          <DropdownButton id="dropdown-basic-button" title={username}>
            <Dropdown.Item href="#">Perfil</Dropdown.Item>
            <Dropdown.Item href="#">Cambiar contraseña</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Cerrar sesión</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row className="content">
        <Col xs={12} className="top-content">
          {/* Contenido superior verde */}
          <div className="green-section">
            <h2>Sección superior</h2>
          </div>
        </Col>
        <Col xs={12} className="bottom-content">
          {/* Contenido inferior marrón */}
          <div className="brown-section">
            <h2>Contenido principal</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
