import {
    TICKET_EDIT_SOLICITUD
   ,TICKET_EDIT_EJECUCION
   ,TICKET_EDIT_RESPONSE
   ,TICKET_EDIT_VOID
} from './const';
import { findService } from '../../../services/ticket.services';

const solicitudEditActionCreator = () => ({
   type: TICKET_EDIT_SOLICITUD,
   payload: true
})

const ejecucionEditActionCreator = (data) => ({
   type: TICKET_EDIT_EJECUCION,
   payload: data
})

const responseEditActionCreator = (data) => ({
   type: TICKET_EDIT_RESPONSE,
   payload: data
})

const voidEditActionCreator = () => ({
    type: TICKET_EDIT_VOID,
    payload: null
 })

export const editActionsAsyncCreator = (data) => {
   return (dispatch) => {
       dispatch(solicitudEditActionCreator())
       findService(data).then(data => {
           dispatch(ejecucionEditActionCreator(data));
           
           if (data.data.message === 'success') {
            dispatch(responseEditActionCreator(data.data));
            dispatch(voidEditActionCreator());
           }else{
            dispatch(responseEditActionCreator(null));
           }
            
            
       }).catch(err => {
           console.log(err);
           //dispatch(errorEditActionCreator(err));
       })
   }
}