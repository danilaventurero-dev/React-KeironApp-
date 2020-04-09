import {
    USER_LOGIN_SOLICITUD,
    USER_LOGIN_EJECUCION,
    USER_LOGIN_RESPONSE,
    AUTH_LOGOUT
} from './const';

const initialState = {
    data: localStorage.getItem('jwt') ||  null,
    perfil: localStorage.getItem('rol') ||  null,
    msg: '',
    solicitud: null
};

const loginReducer = (prevState = initialState, action) => {
    switch (action.type) {

        case USER_LOGIN_SOLICITUD:
            return {
                data: prevState.data,
                perfil: prevState.perfil,
                msg: prevState.msg,
                solicitud: action.payload,
            };
        case USER_LOGIN_EJECUCION:
            localStorage.setItem('jwt', action.payload.token);
            localStorage.setItem('rol', action.payload.perfil);
            return {
                data: action.payload.token,
                perfil: action.payload.perfil,
                msg: prevState.message,
                solicitud: prevState.solicitud,
            };
        case USER_LOGIN_RESPONSE:
            return {
                ...prevState,
                ...prevState,
                msg: action.payload.message,
                solicitud: false,
            };
        case AUTH_LOGOUT:
            localStorage.removeItem('jwt');
            localStorage.removeItem('rol');
            return {
                data: null,
                perfil: null,
                msg: 'Logueo finalizo con exito',
                success: false,
            };

        default:
            return prevState;
    }
}

export default loginReducer;