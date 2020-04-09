import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import useInput from '../hooks/useInput.js'
import {createActionsAsyncCreator as createAction} from '../store/modules/usuarios/createAction';

const Registro = (props) => {
    const dispatch = useDispatch();
    const msj = useSelector(store => store.user.create.msj );
    console.log(msj);
    const nombre = useInput('','nombre');
    const mail = useInput('','mail');
    const password = useInput('','password');
    const tipo_user_id = useInput('','tipo_user_id')
    const registerUser = () =>{
        const user = {
            nombre: nombre.value,
            mail: mail.value,
            password: password.value,
            TipoUser_id: tipo_user_id.value
        }
        debugger
        dispatch(createAction(user)) ;
    }
    useEffect(() => {
      if (msj === 'success') {
          props.history.push('/')
      }
    }, [msj])
  return (
    <Form>
      <FormGroup row>
        <Col sm={4}>
        <Label for="nombre">Nombre</Label>
                <Input {...nombre} placeholder="Nombre" />
        </Col>
      </FormGroup>
      <FormGroup row>
          <Col sm={4}>
          <Label for="mail">Correo Electronico</Label>
                <Input {...mail} placeholder="mail" />  
          </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={4}>
        <Label for="nombre">Password</Label>
                <Input {...password} placeholder="Password" />
        </Col>
      </FormGroup>
      <FormGroup row>
          <Col sm={4}>
          <Label for="Select">tipo de usuario</Label>
            <Input {...tipo_user_id}  type="select" placeholder="tipo_user_id" >
            <option>Seleccione</option>
            <option value="1">Administrador</option>
            <option value="2">Usuario</option>
            </Input>
          </Col> 
      </FormGroup>
      <FormGroup row>
        <Col sm={6}>
            <Button onClick={(registerUser)}>Enviar</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default Registro;