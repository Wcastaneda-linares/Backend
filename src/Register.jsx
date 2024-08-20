import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Login.css'; // Reutilizamos los mismos estilos

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sexo, setSexo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    // Lógica para registrar al usuario con los datos adicionales
    console.log('Nombre:', firstName);
    console.log('Apellido:', lastName);
    console.log('Nombre de usuario:', username);
    console.log('Email:', email);
    console.log('Teléfono:', phone);
    console.log('Sexo:', sexo);
    console.log('Contraseña:', password);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center login-container">
      <Row className="w-100">
        <Col xs={12} md={6} className="mx-auto">
          <div className="login-card">
            <div className="text-center mb-4">
              <i className="fa fa-user-plus fa-5x login-icon"></i>
              <h2>Registro</h2>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstName" className="mb-3">
                <div className="input-icon">
                  <i className="fa fa-user"></i>
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="formLastName" className="mb-3">
                <div className="input-icon">
                  <i className="fa fa-user"></i>
                  <Form.Control
                    type="text"
                    placeholder="Apellido"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="formUsername" className="mb-3">
                <div className="input-icon">
                  <i className="fa fa-user"></i>
                  <Form.Control
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-3">
                <div className="input-icon">
                  <i className="fa fa-envelope"></i>
                  <Form.Control
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="formPhone" className="mb-3">
                <div className="input-icon">
                  <i className="fa fa-phone"></i>
                  <Form.Control
                    type="tel"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </Form.Group>

              <Form.Group controlId="formSexo" className="mb-3">
  <div className="input-icon">
    <i className="fa fa-venus-mars"></i>
    <Form.Control
      as="select"
      value={sexo}
      onChange={(e) => setSexo(e.target.value)}
      required
    >
      <option value="">Seleccionar su sexo</option>
      <option value="Masculino">Masculino</option>
      <option value="Femenino">Femenino</option>
      <option value="Otro">Otro</option>
    </Form.Control>
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

              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <div className="input-icon">
                  <i className="fa fa-lock"></i>
                  <Form.Control
                    type="password"
                    placeholder="Confirmar contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Registrarse
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
