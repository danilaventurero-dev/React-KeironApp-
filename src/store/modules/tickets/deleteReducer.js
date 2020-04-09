import {
    TICKET_DELETE_SOLICITUD 
    , TICKET_DELETE_EJECUCION
    , TICKET_DELETE_RESPONSE
} from './const'; 

const initialState = {
    msj: '',
    success:false,
    solicitud:false,
};

const findReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case TICKET_DELETE_SOLICITUD:
            return{
                msj: prevState.msg,
                success: false,
                solicitud:true,
            };
        case TICKET_DELETE_EJECUCION:
            return{
                msj: action.payload.message,
                success: false,
                solicitud:true
            };
        case TICKET_DELETE_RESPONSE:
            return{
                msj: prevState.msj,
                solicitud: false,
                success: true,
            };
        default:
            return prevState;
    }
};

export default findReducer;