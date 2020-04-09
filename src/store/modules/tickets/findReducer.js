import {
    TICKET_FIND_SOLICITUD 
    , TICKET_FIND_EJECUCION
    , TICKET_FIND_RESPONSE
} from './const'; 

const initialState = {
    data:  [],
    msj: '',
    success:false,
    solicitud:false,
};

const findReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case TICKET_FIND_SOLICITUD:
            return{
                data: prevState.data,
                msj: prevState.msg,
                success: false,
                solicitud:true,
            };
        case TICKET_FIND_EJECUCION:
            return{
                data: action.payload.data,
                msj: action.payload.message,
                success: false,
                solicitud:true
            };
        case TICKET_FIND_RESPONSE:
            return{
                data: prevState.data,
                msj: prevState.msj,
                solicitud: false,
                success: true,
            };
        default:
            return prevState;
    }
};

export default findReducer;