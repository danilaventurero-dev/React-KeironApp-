import {
    TICKET_DELETE_SOLICITUD
   ,TICKET_DELETE_EJECUCION
   ,TICKET_DELETE_RESPONSE
} from './const';
import { deleteService } from '../../../services/ticket.services';

const solicitudDeleteActionCreator = () => ({
   type: TICKET_DELETE_SOLICITUD,
   payload: true
})

const ejecucionDeleteActionCreator = (data) => ({
   type: TICKET_DELETE_EJECUCION,
   payload: data
})

const responseDeleteActionCreator = (data) => ({
   type: TICKET_DELETE_RESPONSE,
   payload: data
})

export const deleteActionsAsyncCreator = (data) => {
   return (dispatch) => {
      debugger
       dispatch(solicitudDeleteActionCreator())
       
       deleteService(data).then(data => {
           dispatch(ejecucionDeleteActionCreator(data));
           
               dispatch(responseDeleteActionCreator(data));
           
       }).catch(err => {
           console.log(err);
           //dispatch(errorDeleteActionCreator(err));
       })
   }
}