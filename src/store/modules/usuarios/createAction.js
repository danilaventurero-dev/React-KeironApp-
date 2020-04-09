import {
    USER_CREATE_SOLICITUD
   ,USER_CREATE_EJECUCION
   ,USER_CREATE_RESPONSE
} from './const';
import { saveService } from '../../../services/user.services';

const solicitudCreateActionCreator = () => ({
   type: USER_CREATE_SOLICITUD,
   payload: true
})

const ejecucionCreateActionCreator = (data) => ({
   type: USER_CREATE_EJECUCION,
   payload: data
})

const responseCreateActionCreator = (data) => ({
   type: USER_CREATE_RESPONSE,
   payload: data
})

export const createActionsAsyncCreator = ( data) => {
   return (dispatch) => {
       dispatch(solicitudCreateActionCreator())
       
       saveService(data).then(data => {
           dispatch(ejecucionCreateActionCreator(data));
           
           if (data.message === 'success') 
               dispatch(responseCreateActionCreator(data));
           
       }).catch(err => {
           console.log(err);
           //dispatch(errorCreateActionCreator(err));
       })
   }
}