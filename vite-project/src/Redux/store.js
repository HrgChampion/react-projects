import { applyMiddleware, combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import {UsersReducer} from './reducer.js';
import thunk from 'redux-thunk';
const rootReducer=combineReducers({
    user:UsersReducer,
    users:UsersReducer 
});

export const store = createStore(rootReducer, applyMiddleware(thunk));