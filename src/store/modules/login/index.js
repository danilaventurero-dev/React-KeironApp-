import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const Reducers = combineReducers ({
    login: loginReducer,
    
});

export default  Reducers;