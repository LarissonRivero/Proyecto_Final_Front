import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoesContext } from "../Context";
import { Form, Button, Alert, Spinner } from "react-bootstrap";

const Login = () => {
  const { handleLogin, loading, loggedInUser, setLoggedInUser } = useContext(ShoesContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [localError, setLocalError] = useState(null);
  const [userNotRegistered, setUserNotRegistered] = useState(false);
  const [formClosed, setFormClosed] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser && Object.keys(loggedInUser).length > 0) {
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    setUserNotRegistered(false);
    setShowSpinner(true);

    try {
      const { success, data, error } = await handleLogin(email, password);

      if (!success) {
        setUserNotRegistered(true);
        setLocalError(error || "Error al iniciar sesión.");
        setShowSpinner(false);
        return;
      }

      setLoggedInUser(data.user);

      setTimeout(() => {
        setShowSpinner(false);
        navigate("/");
        console.log("Respuesta del servidor para login:", data.message);
      }, 3000);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setLocalError(error.message || "Error al iniciar sesión.");
      setShowSpinner(false);
    }
  };

  const handleCloseForm = () => {
    setFormClosed(true);
    navigate("/");
  };

  if (formClosed) {
    return null;
  }

  return (
    <div className="container container1">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" id="form">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleCloseForm}
              ></button>
            </div>
            <div className="card-body">
              {showSpinner && <Spinner animation="border" />}
              <h4 className="card-title text-center">Inicio de Sesión</h4>
              {userNotRegistered && (
                <Alert variant="danger" className="mt-3">
                  Usuario no registrado. Verifica tu correo y contraseña.
                </Alert>
              )}
              <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3 form-check">
                  <Form.Check
                    type="checkbox"
                    label="Recuérdame"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                </Form.Group>
                <div className="d-flex justify-content-center align-items-center">
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-md btn-block"
                    disabled={loading}
                  >
                    {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                  </Button>
                </div>
                {localError && (
                  <Alert variant="danger" className="mt-3">
                    {localError}
                  </Alert>
                )}
                <div className="mt-3">
                  <p className="text-center">
                    <NavLink
                      to="/forgottenpassword"
                      className="text-decoration-none"
                    >
                      Olvidaste la Contraseña
                    </NavLink>
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

