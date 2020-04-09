import React  from 'react';
import{Nav} from 'reactstrap';
import {  NavLink as Link} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import { logoutAction } from '../store/modules/login/loginAction';

const Menu = () => {
    const jwt = useSelector(store => store.login.login.data );
    const dispatch = useDispatch();
    const handlerLogout = () => {
        dispatch(logoutAction());
      }
    return (
        <div>
        <h4 >NAVEGACION</h4>
        <Nav className="flex-column nav">
            <li className="nav-item">
            <Link className='' to='/' >Inicio</Link>
            </li>
            <li className="nav-item">
            <Link className='' to='/registro' >Crear Usuario</Link>
            </li>
            <li className="nav-item">
            <Link className='' to='/registroTicket' >Crear ticket</Link>
            </li>
            {jwt==null ? (
                <li className="nav-item">
                <Link className='' to='/login' >Login</Link>
                </li>
            ) : (
                <li className="nav-item">
                <Link className='' to='#' onClick={handlerLogout} >Cerrar sesion</Link>
                </li>
             )}
        </Nav>
        </div>
        
    );
}

export default Menu;