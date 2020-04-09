import {
    TICKET_FIND_SOLICITUD
   ,TICKET_FIND_EJECUCION
   ,TICKET_FIND_RESPONSE
} from './const';
import { getService } from '../../../services/ticket.services';

const solicitudFindActionCreator = () => ({
   type: TICKET_FIND_SOLICITUD,
   payload: true
})

const ejecucionFindActionCreator = (data) => ({
   type: TICKET_FIND_EJECUCION,
   payload: data
})

const responseFindActionCreator = (data) => ({
   type: TICKET_FIND_RESPONSE,
   payload: data
})

export const FindActionsAsyncCreator = () => {
   return (dispatch) => {
       dispatch(solicitudFindActionCreator())
       
       getService().then(data => {
           dispatch(ejecucionFindActionCreator(data));
           
           if (data.message === 'success') 
               dispatch(responseFindActionCreator(data));
           
       }).catch(err => {
           console.log(err);
           //dispatch(errorFindActionCreator(err));
       })
   }
}