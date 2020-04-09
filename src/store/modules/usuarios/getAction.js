import {
    USER_GET_SOLICITUD
   ,USER_GET_EJECUCION
   ,USER_GET_RESPONSE
} from './const';
import { getService } from '../../../services/user.services';

const solicitudGetActionCreator = () => ({
   type: USER_GET_SOLICITUD,
   payload: true
})

const ejecucionGetActionCreator = (data) => ({
   type: USER_GET_EJECUCION,
   payload: data
})

const responseGetActionCreator = (data) => ({
   type: USER_GET_RESPONSE,
   payload: data
})

export const getActionAsyncCreator = () => {
   return (dispatch) => {
       dispatch(solicitudGetActionCreator())
       
       getService().then(data => {
           dispatch(ejecucionGetActionCreator(data));
           
           if (data.message === 'success') 
               dispatch(responseGetActionCreator(data));
           
       }).catch(err => {
           console.log(err);
           //dispatch(errorGetActionCreator(err));
       })
   }
}