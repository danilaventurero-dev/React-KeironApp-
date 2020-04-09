import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import Table from '../componentes/Table';
import { Container } from 'reactstrap';
import {FindActionsAsyncCreator as findAction} from '../store/modules/tickets/findAction';
import { createBrowserHistory } from "history";



const Home = (props) => {  
    const history = createBrowserHistory();  
    const dispatch = useDispatch();
    const rol = useSelector(store => store.login.login.perfil );
    const solicitud = useSelector(store => store.ticket.delete.solicitud );
    const sol = useSelector(store => store.ticket.edit.solicitud );
    const msj = useSelector(store => store.ticket.edit.msj );
    useEffect(() => {
            dispatch(findAction());
        
    }, [solicitud])

    useEffect(() => {
        
        if (msj === 'success') {
        props.history.push('/RegistroTicket')
        }
    }, [msj])
    
    const elementos = useSelector(store => store.ticket.find.data );
    return (
        <Container >
            <Table
            history={history}
            rol={rol}
            dispatch={dispatch}
            elementos={elementos}
            />
        </Container>
    );
};
export default Home;