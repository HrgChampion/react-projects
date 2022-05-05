import { useEffect } from "react"

export const Alert=({type,message,removeAlert,list})=>{
    useEffect(()=>{
        const timer=setTimeout(()=>{
            removeAlert();
        },3000);
        return ()=>{
            clearTimeout(timer);
        }
    },[list])
    return (
        <div className={`alert alert-${type}`}>
            {message}
        </div>
    )
}