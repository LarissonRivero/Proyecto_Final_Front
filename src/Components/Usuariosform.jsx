
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiSearch } from 'react-icons/bi';



function Usuariosform() {
  return (
    <form className="form-register">
      <div className="row">
        <div className="col-md-12 text-center mb-2">
          <img src="/src/Image/Snicky.jpeg" className="theme-logo" width="300px" height="100px" />
        </div>
     

        <div class="row">

          <div class="col-sm-12 col-md-12"><label className="">Nombre   <i class="fa-solid fa-user"></i></label>
            <input name="nombre" type="text" className="form-control mb-4" placeholder="Nombre" required /></div>


          <div class="col-sm-5 col-md-6"><label>Apellido   <i class="fa-regular fa-user"></i></label>
            <input name="apellido" type="text" className="form-control mb-4" placeholder="Apellido" required /></div>

          <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
            <label >Rut   <i class="fa-solid fa-id-card"></i></label>
            <input name="rut" type="text" className="form-control mb-4" placeholder="rut" required /></div>
        

        <div class="col-sm-5 col-md-6"><label >Direccion   <i class="fa-solid fa-location-dot"></i></label>
          <input name="direccion" type="text" className="form-control mb-4" placeholder="direccion" required /></div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><label >Ciudad   <i class="fa-solid fa-city"></i></label>
          <input name="ciudad" type="text" className="form-control mb-4" placeholder="ciudad" required /></div>

        <div class="col-sm-5 col-md-6"><label >Región   <i class="fa-solid fa-globe"></i></label>
          <input name="región" type="text" className="form-control mb-4" placeholder="región" required /></div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><label >Teléfono   <i class="fa-solid fa-phone"></i></label>
          <input name="telefono" type="text" className="form-control mb-4" placeholder=" telefonico" required /></div>

        <div class="col-sm-5 col-md-6"><label className="">Correo   <i class="fa-solid fa-envelope"></i></label>
          <input name="correo" type="email" className="form-control mb-4" placeholder="Correo" required /></div>

        <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"><label className="">Contraseña   <i class="fa-solid fa-lock"></i></label>
          <input name="contrasena" type="password" className="form-control mb-5" placeholder="Contraseña" required /></div>



        {/* <NavLink to="/login" activeClassName="active" className="btn btn-lg btn-outline-dark btn-block btn-rounded mb-3">Inicia Sesión</NavLink> */}


        <button className="btn btn-lg btn-outline-dark btn-block btn-rounded mb-3">Inicia Sesión</button>


        <p className="text-center">© SNICKY</p>

      </div>
      </div>

    </form>
  );
}

export default Usuariosform