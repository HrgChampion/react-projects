import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
export const PetDetail=()=>{
    let {id}=useParams();
    const navigate=useNavigate();
    const [pet,setPet]=useState({});
    useEffect(()=>{
        getdata();
    },[]);

    const getdata=()=>{
        axios.get(`https://petboarding-backend.herokuapp.com/pets/${id}`)
        .then(res=>{
            console.log(res.data);
            setPet(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }


    return(
    <div>
      <Button style={{margin:"20px"}} type="submit" color="primary" onClick={()=>{
            navigate("/allpets")
        }}>Go Back</Button> 
    <h1>Pet Detail</h1>

    <div>
    
    <h2>Name : {pet.name}</h2>
    <h3>Breed : {pet.breed}</h3>
    
    <h3>Age : {pet.age}</h3>
    <h3>Category : {pet.category}</h3>
    </div>
    </div>
    )
}