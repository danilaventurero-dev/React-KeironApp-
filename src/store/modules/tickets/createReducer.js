import {
    TICKET_CREATE_SOLICITUD 
    , TICKET_CREATE_EJECUCION
    , TICKET_CREATE_RESPONSE
} from './const'; 

const initialState = {
    data:  [],
    msj: '',
    success:false,
    solicitud:false,
};

const createReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case TICKET_CREATE_SOLICITUD:
            return{
                data: prevState.data,
                msj: prevState.msg,
                success: false,
                solicitud:true,
            };
        case TICKET_CREATE_EJECUCION:
            return{
                data: prevState.data,
                msj: action.payload.message,
                success: false,
                solicitud:true
            };
        case TICKET_CREATE_RESPONSE:
            return{
                data: prevState.data,
                msj: prevState.msj,
                success: true,
                solicitud: false
            };
        default:
            return prevState;
    }
};

export default createReducer;