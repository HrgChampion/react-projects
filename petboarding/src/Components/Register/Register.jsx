import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Register=()=>{

    const [user,setUser]=useState({
        email:"",
        password:"",

    })
    const navigate = useNavigate(); 
    const addUser=(e)=>{
        e.preventDefault();
        axios.post("https://evaluationsserver.herokuapp.com/register",{
            email:user.email,
            password:user.password,

        })
        .then(res=>{
            console.log(res);
            navigate("/login");
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
                <input className="button" type="submit" value="Register"/>
          
          </form>
          </div>
        </div>
    )
}