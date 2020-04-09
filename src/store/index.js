import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Reducers from './modules/';

const store = createStore(
    Reducers,
    applyMiddleware(thunk,logger)
);

export default store;