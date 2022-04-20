import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
const rootReducer=combineReducers({
    user:userReducer,
    users:usersReducer 
});

export const store = createStore(rootReducer, applyMiddleware(thunk));