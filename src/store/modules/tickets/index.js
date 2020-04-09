import {combineReducers} from 'redux';
import findReducer from "./findReducer";
import createReducer from "./createReducer";
import deleteReducer from "./deleteReducer";
import editReducer from "./editReducer";

const Reducers = combineReducers ({
    find: findReducer,
    create: createReducer,
    delete: deleteReducer,
    edit: editReducer,
    
});

export default  Reducers;