import { combineReducers } from 'redux';
import createReducer from './createReducer';
import getReducer from './getReducer';

const Reducers = combineReducers ({
    create: createReducer,
    get: getReducer
    
});

export default  Reducers;