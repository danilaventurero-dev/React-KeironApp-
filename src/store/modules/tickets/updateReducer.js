import {
    TICKET_UPDATE_SOLICITUD 
    , TICKET_UPDATE_EJECUCION
    , TICKET_UPDATE_RESPONSE
} from './const'; 

const initialState = {
    data:  [],
    msj: '',
    success:false,
    solicitud:false,
};

const createReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case TICKET_UPDATE_SOLICITUD:
            return{
                data: prevState.data,
                msj: prevState.msg,
                success: false,
                solicitud:true,
            };
        case TICKET_UPDATE_EJECUCION:
            return{
                data: prevState.data,
                msj: action.payload.message,
                success: false,
                solicitud:true
            };
        case TICKET_UPDATE_RESPONSE:
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