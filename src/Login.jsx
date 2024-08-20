import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Importamos useNavigate
import './Login.css';

function Login() {
  const [identifier, setIdentifier] = useState('');  // Puede ser nombre de usuario o correo
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook para redirigir

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulamos la validación de credenciales correctas
    const validCredentials = true; // Esto sería reemplazado con la lógica real de validación

    if (validCredentials) {
      // Si las credenciales son válidas, redirigir al home
      navigate('/home'); // Redirigir a la página de inicio
    } else {
      // Mostrar un mensaje de error o manejar credenciales inválidas
      alert('Credenciales incorrectas');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center login-container">
      <Row className="w-100">
        <Col xs={12} md={6} className="mx-auto">
          <div className="login-card">
            <div className="text-center mb-4">
              <i className="fa fa-user-circle fa-5x login-icon"></i>
              <h2>Iniciar Sesión</h2>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicIdentifier" className="mb-3">
                <div className="input-icon">
                  <i className="fa fa-user"></i>
                  <Form.Control
                    type="text"
                    placeholder="Nombre de usuario o correo electrónico"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <div className="input-icon">
                  <i className="fa fa-lock"></i>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Iniciar Sesión
              </Button>

              <div className="text-center mt-3">
                <Link to="/change-password">¿Olvidaste tu contraseña?</Link>
              </div>

              <div className="text-center mt-3">
                <span>¿No tienes una cuenta? </span>
                <Link to="/register">Crea una ahora</Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
