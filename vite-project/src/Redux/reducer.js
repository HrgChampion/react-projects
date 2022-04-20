import  {SET_USER}  from "./action";

const initState={
    users:[],
    user:{},
    loading:false,
    error:null
}

export const UsersReducer = (state=initState, {type,payload}) => {
    switch (type) {
        case SET_USER:
            return{}
        default:
            return state;
    }
}
