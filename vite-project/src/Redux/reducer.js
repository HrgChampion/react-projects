import  {SET_USER,DELETE_USER,ADD_USER, GET_USER, UPDATE_USER}  from "./action";

const initState={
    users:[],
    user:{},
    loading:true,
    error:null
}

export const UsersReducer = (state=initState, {type,payload}) => {
    switch (type) {
        case SET_USER:
            return{
                ...state,
                users:payload,
                loading:false
            }
        case DELETE_USER:
        case ADD_USER:
        case UPDATE_USER:
            return{
                ...state,   
                loading:false
            }
        case GET_USER:
            return{
                ...state,
                user:payload,
                loading:false
            }

        default:
            return state;
    }
}
