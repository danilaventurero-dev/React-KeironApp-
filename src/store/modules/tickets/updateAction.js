import {
    TICKET_UPDATE_SOLICITUD
   ,TICKET_UPDATE_EJECUCION
   ,TICKET_UPDATE_RESPONSE
} from './const';
import { updateService } from '../../../services/ticket.services';

const solicitudCreateActionCreator = () => ({
   type: TICKET_UPDATE_SOLICITUD,
   payload: true
})

const ejecucionCreateActionCreator = (data) => ({
   type: TICKET_UPDATE_EJECUCION,
   payload: data
})

const responseCreateActionCreator = (data) => ({
   type: TICKET_UPDATE_RESPONSE,
   payload: data
})

export const updateActionsAsyncCreator = ( data, id) => {
   return (dispatch) => {
       dispatch(solicitudCreateActionCreator())
       debugger
       updateService(data,id).then(data => {
           dispatch(ejecucionCreateActionCreator(data));
           
           if (data.message === 'success') 
               dispatch(responseCreateActionCreator(data));
           
       }).catch(err => {
           console.log(err);
           //dispatch(errorCreateActionCreator(err));
       })
   }
}