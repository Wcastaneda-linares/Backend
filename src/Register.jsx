import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Login.css'; // Reutilizamos los mismos estilos

function ChangePassword() {
  const [step, setStep] = useState(1); // Controlamos en qué paso estamos
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [loading, setLoading] = useState(false);

  // Función para manejar la verificación de identidad
  const handleIdentityVerification = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Lógica de verificación simulada
    try {
      const response = await fetch('/api/verify-identity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, phone }),
      });

      if (response.ok) {
        alert('Se ha enviado una nueva contraseña a su correo electrónico.');
        setStep(2); // Avanzamos al paso 2: Confirmación de envío de contraseña
      } else {
        alert('Error en la verificación de identidad.');
      }
    } catch (error) {
      alert('Hubo un error al intentar verificar su identidad.');
    } finally {
      setLoading(false);
    }
  };

  // Función para restringir caracteres no numéricos en el campo de teléfono
  const handlePhoneKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault(); // Evitamos que se escriban caracteres no numéricos
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center login-container">
      <Row className="w-100">
        <Col xs={12} md={6} className="mx-auto">
          <div className="login-card">
            <div className="text-center mb-4">
              <i className="fa fa-lock fa-5x login-icon"></i>
              <h2>Verificación de identidad</h2>
            </div>

            {step === 1 && (
              <Form onSubmit={handleIdentityVerification}>
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

                <Form.Group controlId="formEmail" className="mb-3">
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
                      placeholder="Número de teléfono"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      onKeyPress={handlePhoneKeyPress}
                    />
                  </div>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                  {loading ? 'Verificando...' : 'Verificar identidad'}
                </Button>
              </Form>
            )}

            {step === 2 && (
              <div className="text-center">
                <h4>Se ha enviado una nueva contraseña a su correo electrónico.</h4>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ChangePassword;
