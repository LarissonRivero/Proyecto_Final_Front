import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiSearch } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

function NavbarGuest() {
  return (
    <Navbar className="bg-light p-3">
      <Form inline className="mx-auto">
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Control type="text" placeholder="Buscar Zapatillas" />
          </Col>
          <Col xs="auto">
            <Button type="submit">
              <BiSearch style={{ textDecoration: 'none' }} />
            </Button>
          </Col>
          <Col xs="auto">
            <NavLink to="/loginusers" className="text-decoration-none">
              Iniciar Sesión
            </NavLink>
          </Col>
          <Col xs="auto">
            <NavLink to="/register" className="text-decoration-none">
              Registrarse
            </NavLink>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default NavbarGuest;
