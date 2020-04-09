import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import useInput from '../hooks/useInput.js'
import {createActionsAsyncCreator as createAction} from '../store/modules/tickets/createAction';
import {getActionAsyncCreator as getAction} from '../store/modules/usuarios/getAction';
import {updateActionsAsyncCreator as updateAction} from '../store/modules/tickets/updateAction';

const TicketCreate = (props) => {
    const dispatch = useDispatch();
    const usuarios = useSelector(store => store.user.get.data );
    const ticket = useSelector(store => store.ticket.edit.data );
    const msj = useSelector(store => store.ticket.create.msj );
    const solicitud = useSelector(store => store.ticket.create.solicitud );
    const User_id = useInput('','User_id')
    const ticket_pedido = useInput( ticket ? ticket.ticket_pedido : ''
    ,'ticket_pedido')
    const registerTicket = () =>{
        const ticket = {
            User_id: User_id.value,
            ticket_pedido: ticket_pedido.value
        }
        dispatch(createAction(ticket));
    }
    const updateTicket = () =>{
      debugger
      const tick = {
          User_id: User_id.value,
          ticket_pedido: ticket_pedido.value
      }
      dispatch(updateAction(tick,ticket.id));
  }
    useEffect(() => {
      dispatch(getAction())
    }, [])
    useEffect(() => {
      if (msj === 'success' && solicitud !== false) {
          props.history.push('/')
      }
    }, [msj,solicitud])
  return (
    <Form>
      <FormGroup row>
          <Col sm={4}>
          <Label for="Select">Asignar usuario</Label>
            <Input {...User_id}  type="select" placeholder="User_id" >
            <option value="0">Seleccione</option>
            {
                usuarios.map( usr => (
                    <option 
                    key={usr.id} 
                    value={usr.id}>{usr.nombre}</option>
                ))
            }
            </Input>
          </Col> 
          <Col sm={4}>
          <Label for="Select">Asignar pedido</Label>
          { ticket ? (
            <Input {...ticket_pedido}  type="number" value={ticket.ticket_pedido}/>
          
          ):(
            <Input {...ticket_pedido}  type="number" placeholder="El pedido del ticket es un numero" />
          
          )}
            </Col> 
      </FormGroup>
      <FormGroup row>
        <Col sm={6}>
          {ticket ? (
             <Button onClick={(updateTicket)}>Actualizar</Button>
          ) : (
            <Button onClick={(registerTicket)}>Guardar</Button>
          )

          }
           
        </Col>
      </FormGroup>
    </Form>
  );
}

export default TicketCreate;