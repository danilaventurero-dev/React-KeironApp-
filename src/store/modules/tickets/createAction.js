import {
    TICKET_CREATE_SOLICITUD
   ,TICKET_CREATE_EJECUCION
   ,TICKET_CREATE_RESPONSE
} from './const';
import { saveService } from '../../../services/ticket.services';

const solicitudCreateActionCreator = () => ({
   type: TICKET_CREATE_SOLICITUD,
   payload: true
})

const ejecucionCreateActionCreator = (data) => ({
   type: TICKET_CREATE_EJECUCION,
   payload: data
})

const responseCreateActionCreator = (data) => ({
   type: TICKET_CREATE_RESPONSE,
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