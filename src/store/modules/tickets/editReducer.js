import {
    TICKET_EDIT_SOLICITUD 
    , TICKET_EDIT_EJECUCION
    , TICKET_EDIT_RESPONSE
    , TICKET_EDIT_VOID
} from './const'; 

const initialState = {
    data:  [],
    msj: '',
    success:false,
    solicitud:false,
};

const findReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case TICKET_EDIT_SOLICITUD:
            return{
                data: prevState.data,
                msj: prevState.msg,
                success: false,
                solicitud:true,
            };
        case TICKET_EDIT_EJECUCION:
            return{
                data: action.payload.data.data,
                msj: action.payload.data.message,
                success: false,
                solicitud:true,
            };
        case TICKET_EDIT_RESPONSE:
            return{
                data: action.payload.data,
                msj: action.payload.data,
                success: true,
                solicitud: true,
            };
            case TICKET_EDIT_VOID:
                return{
                    data: prevState.data,
                    msj: '',
                    solicitud: false,
                    success: false,
                };
        default:
            return prevState;
    }
};

export default findReducer;