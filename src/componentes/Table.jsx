import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import { Table as TableRS, Button, Container } from 'reactstrap';
import {deleteActionsAsyncCreator as deleteAction} from '../store/modules/tickets/deleteAction'
import {editActionsAsyncCreator as editAction} from '../store/modules/tickets/editAction'
//import Modal from './modal'


const Table = (props) => {
    const perfil = useSelector(store => store.login.login.perfil );
    const solicitud = useSelector(store => store.ticket.edit.solicitud );
    return (
        <Container>
            <TableRS striped>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Nº ticket</th>
                    <th>Fecha de creacion</th>
                    {perfil==1 ? (
                    <th>Accion</th>
                    ) : (<td></td>
                    )}
                </tr>
            </thead>
            <tbody>
                {
                    props.elementos.map(elem =>(
                        <tr key={elem.id}>
                            <td>{elem.id}</td>
                            <td>{elem.user.nombre}</td>
                            <td>{elem.ticket_pedido}</td>
                            <td>{elem.created_at}</td>
                            {perfil==1 ? ( <td >
                            <Button onClick={() => props.dispatch(editAction(elem.id))} color="primary">EDITAR</Button>{' '}
                            <Button onClick={() => props.dispatch(deleteAction(elem.id))}  color="danger">BORRAR</Button>{' '}
                            </td>) : (<td></td>
                            )}
                        </tr>
                    ))
                }
            </tbody>
        </TableRS>
        
        
        
        </Container>
        
    );
}

export default Table;