import { SET_LISTING } from "./action";
import {REGISTER} from './action';
import {SET_USER} from './action' ;
const initState = {
    listings: [],
    loading: true,
    error: null,
    Register:{},
    user_token: ""
};

export const PetReducer=(state=initState,{type,payload})=>{
    switch(type){
        case SET_LISTING:
            return{
                ...state,
                listings:payload,
                loading:false
            }
        case REGISTER:
            return {
                ...state,
                 Register: payload
                }
        case SET_USER:
             return {...state, user_token : payload};
        default:
            return state;
    }
}