export const SET_LISTING="SET_LISTING";
export const ADD_LISTING="ADD_LISTING";
export const SET_LOADING="SET_LOADING";
export const SET_ERROR="SET_ERROR";
export const REGISTER="REGISTER";
export const SET_USER = "SET_USER";
export const setListing=(listing)=>({type:SET_LISTING,payload:listing});
export const addListing=(listing)=>({type:ADD_LISTING,payload:listing});
export const setLoading=(loading)=>({type:SET_LOADING,payload:loading});
export const setError=(error)=>({type:SET_ERROR,payload:error});
export const setUserToken = (payload) => ({type: SET_USER, payload});
export const registeraction = (data) => {
    return {
        type: REGISTER,
        payload:data
    }
}

export const fetchListing=(data)=>{
    if(data){
        return dispatch=>{
            dispatch(setListing(data));
            data=null;
        }
    }else{ 
    return async (dispatch)=>{
        try{
            const response=await fetch("https://petboarding-backend.herokuapp.com/listings");
            const listing=await response.json();
            //console.log(listing)
            dispatch(setListing(listing));
        }catch(error){
            console.log(error);
        }
    }
}
}
export const addPet=(data)=>{
    return async (dispatch)=>{
        try{
            const response=await fetch("https://petboarding-backend.herokuapp.com/listings",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            });
            const listing=await response.json();
            console.log(listing)
            dispatch(addListing(listing));
        }catch(error){
            console.log(error);
        }
    }
}
