import {
    USER_LOGIN_SOLICITUD
    ,USER_LOGIN_EJECUCION
    ,USER_LOGIN_RESPONSE
    ,AUTH_LOGOUT} from './const';
import {loginService} from '../../../services/login.services';
export const logoutAction = () => ({ type: AUTH_LOGOUT, payload: null });
const solicitudActionCreator = () =>({
    type: USER_LOGIN_SOLICITUD,
    payload: true,
});

const ejecucionActionCreator = (data) =>({
    type: USER_LOGIN_EJECUCION,
    payload: data,
});

const responseActionCreator = (data) =>({
    type: USER_LOGIN_RESPONSE,
    payload: data,
});

export const loginActionsAsyncCreator = (mail, password) => {
    return (dispatch, getStore) => {
        dispatch(solicitudActionCreator());
        loginService({ mail, password }).then(data => {
            dispatch(ejecucionActionCreator(data.data));
            dispatch(responseActionCreator(data.data));
        }).catch(err => {
            dispatch(responseActionCreator(err));
        })
    }
}