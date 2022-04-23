import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserToken } from "../../Redux/action";

import "./Login.css"


export const Login=()=>{

    const [user,setUser]=useState({
        email:"",
        password:"",

    })
    const dispatch=useDispatch();

    const navigate = useNavigate();

    const addUser=(e)=>{
        e.preventDefault();
        axios.post(`https://evaluationsserver.herokuapp.com/login`,{
            email:user.email,
            password:user.password,

        })
        .then(res=>{
            
            dispatch(setUserToken(res.data.token));
        localStorage.setItem("user_token", res.data.token);
        navigate("/");
            
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const handleChange=(event)=>{
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
    }
    
    
    
    return(
        <div>
        <div className="form">
          <form onSubmit={addUser}>
          <br/>
              <input className="input" name="email" type="text" placeholder="Enter Email" onChange={handleChange}/><br/><br/>
                <input className="input" name="password" type="text" placeholder="Enter password" onChange={handleChange}/><br/><br/>
                <input className="button" type="submit" value="Login"/>
          
          </form>

          </div>
        </div>
    )
}