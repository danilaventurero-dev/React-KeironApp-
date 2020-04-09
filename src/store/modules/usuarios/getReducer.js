import {
    USER_GET_SOLICITUD 
    , USER_GET_EJECUCION
    , USER_GET_RESPONSE
} from './const'; 

const initialState = {
    data:  [],
    msj: '',
    success:false,
    solicitud:false,
};

const getReducer = (prevState = initialState, action) =>    {
    switch (action.type) {
        case USER_GET_SOLICITUD:
            return{
                data: prevState.data,
                msj: prevState.msg,
                success: false,
                solicitud:true,
            };
        case USER_GET_EJECUCION:
            return{
                data: action.payload.data,
                msj: action.payload.message,
                success: false,
                solicitud:true
            };
        case USER_GET_RESPONSE:
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

export default getReducer;