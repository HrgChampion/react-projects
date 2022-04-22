import { SET_LISTING } from "./action";
const initState = {
    listings: [],
    loading: true,
    error: null
};

export const PetReducer=(state=initState,{type,payload})=>{
    switch(type){
        case SET_LISTING:
            return{
                ...state,
                listings:payload,
                loading:false
            }
        default:
            return state;
    }
}