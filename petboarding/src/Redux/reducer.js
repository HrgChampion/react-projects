import { SET_LISTING } from "./action";
import {REGISTER} from './action';
import {SET_USER,SET_PET,ADD_PET} from './action' ;
const initState = {
    listings: [],
    loading: true,
    error: null,
    Register:{},
    user_token: "",
    pets:[]
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
        case SET_PET:
            return {...state, pets : payload, loading:false};
        default:
            return state;
    }
}