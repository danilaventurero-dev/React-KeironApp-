import {
    USER_CREATE_SOLICITUD 
    , USER_CREATE_EJECUCION
    , USER_CREATE_RESPONSE
} from './const'; 

const initialState = {
    data:  [],
    msj: '',
    success:false,
    solicitud:false,
};

const createReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case USER_CREATE_SOLICITUD:
            return{
                data: prevState.data,
                msj: prevState.msg,
                success: false,
                solicitud:true,
            };
        case USER_CREATE_EJECUCION:
            return{
                data: prevState.data,
                msj: action.payload.message,
                success: false,
                solicitud:true
            };
        case USER_CREATE_RESPONSE:
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

export default createReducer;