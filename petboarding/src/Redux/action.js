export const SET_LISTING="SET_LISTING";
export const ADD_LISTING="ADD_LISTING";
export const SET_LOADING="SET_LOADING";
export const SET_ERROR="SET_ERROR";
export const setListing=(listing)=>({type:SET_LISTING,payload:listing});
export const addListing=(listing)=>({type:ADD_LISTING,payload:listing});
export const setLoading=(loading)=>({type:SET_LOADING,payload:loading});
export const setError=(error)=>({type:SET_ERROR,payload:error});

export const fetchListing=(data)=>{
    if(data){
        return dispatch=>{
            dispatch(setListing(data));
            data=null;
        }
    }else{ 
    return async (dispatch)=>{
        try{
            const response=await fetch("http://localhost:5000/listings");
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
            const response=await fetch("http://localhost:5000/listings",{
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
