export const SET_LISTING="SET_LISTING";

export const setListing=(listing)=>({type:SET_LISTING,payload:listing});

export const fetchListing=()=>{
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
