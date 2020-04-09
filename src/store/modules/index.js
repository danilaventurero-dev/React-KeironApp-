import { combineReducers } from 'redux';
import user from './usuarios';
import login from './login'
import ticket from './tickets'

const rootReducer = combineReducers({
    user,
    login,
    ticket
});

export default rootReducer;