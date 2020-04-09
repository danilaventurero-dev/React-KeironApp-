import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const Registro = (props) => {
  return (
    <Form>
      <FormGroup row>
        <Col sm={4}>
        <Label for="Email">Email</Label>
        <Input type="email" name="email" id="Email" placeholder="Ingrese su correo" />
        </Col>
      </FormGroup>
      <FormGroup row>
          <Col sm={4}>
            <Label for="Password">Password</Label>
            <Input type="password" name="password" id="Password" placeholder="Ingrese alguna contraseña" />  
          </Col>
      </FormGroup>
      <FormGroup row>
          <Col sm={4}>
          <Label for="Select">Tipo de usuario</Label>
            <Input type="select" name="select" id="Select">
            <option>1</option>
            <option>2</option>
            </Input>
          </Col> 
      </FormGroup>
      <Col sm={7}>
      <Button>Enviar</Button>
      </Col>
    </Form>
  );
}

export default Registro;