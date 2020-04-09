import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router,Route} from "react-router-dom";
import { Container, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import './App.css';
import Menu from './componentes/menu';
import Registro from './views/Registro';
import RegistroTicket from './views/ticketCreate';
import Login from './views/login';
import Inicio from './views/inicio';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Container className="themed-container" fluid={true}> 
        <Router>
          <Row>
            <Col sm="2" >
              <Menu/>
            </Col>
            <Col sm="10">
              <Route path="/" exact component={Inicio} />
              <Route path="/Login" exact component={Login} />
              <Route path="/Registro" exact component={Registro} />
              <Route path="/RegistroTicket" exact component={RegistroTicket} />
            </Col>
          </Row> 
        </Router>
      </Container>
    </Provider> 
  );
}

export default App;
