import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useNavigate, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, getUserdata, updatedUser } from "../../Redux/action";

export const EditUser = () => {
  let {id} = useParams();
  const dispatch=useDispatch();

const {user}=useSelector(state=>state.user.user);

  useEffect(()=>{
    dispatch(getUserdata(id));
  },[])

  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  useEffect(()=>{
    setState({...user})
  },[user])

  const { name, email, contact, address } = state;
  const navigate = useNavigate();

  const handleChange = (e) => {
      let {name,value} = e.target;
        setState({
            ...state,
            [name]:value
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !contact || !address){
            alert("Please fill all the fields");
            return;
        }
        
       dispatch(updatedUser(state,id));
        alert("User added successfully");
        navigate("/");
    }

  return (
    <div>
    <Button style={{marginTop:"20px"}} type="submit" color="primary" onClick={()=>{
        navigate("/")
    }}>Go Back</Button>
      <h1>Edit User</h1>
      
         <Box
        onSubmit={handleSubmit}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "35ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={name || ""}
            type="text"
            name="name"
            onChange={handleChange}
         
          />
          <br />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={email|| ""}
            type="text"
            name="email"
            onChange={handleChange}
          
          />
          <br />
          <TextField
            id="standard-basic"
            label="Contact"
            variant="standard"
            value={contact || ""}
            type="number"
            name="contact"
            onChange={handleChange}
           
          />
          <br />
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            value={address || ""}
            type="text"
            name="address"
            onChange={handleChange}
           
          />
          <br />
          <Button   variant="contained" type="submit" color="primary">Update</Button>

        </Box>
      
    </div>
  );
};