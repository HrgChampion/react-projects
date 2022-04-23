import { legacy_createStore as createStore} from 'redux'
import {PetReducer} from './reducer';
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers} from 'redux';

const rootReducer = combineReducers({
    listings: PetReducer,
    register: PetReducer,
    pets: PetReducer
    
});

export const store=createStore(rootReducer,applyMiddleware(thunk));