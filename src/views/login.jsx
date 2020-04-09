import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import useInput from '../hooks/useInput.js'
import {loginActionsAsyncCreator as loginAction} from '../store/modules/login/loginAction';

const Login = (props) => {
    const dispatch = useDispatch();

    const mail = useInput('','mail');
    const password = useInput('','password');
    const jwt = useSelector(store => store.login.login.data );
    console.log(jwt);
    useEffect(() => {
      if (jwt !== null) {
          props.history.push('/')
      }
  }, [jwt])
    
  return (
    <Form>
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
        <Col sm={6}>
        <Button onClick={() => dispatch(loginAction(mail.value, password.value))}>Login</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default Login;