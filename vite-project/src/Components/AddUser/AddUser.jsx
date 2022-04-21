import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "../../Redux/action";
export const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const dispatch=useDispatch();
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
        
       dispatch(addUsers(state));
        alert("User added successfully");
        navigate("/");
    }

  return (
    <div>
    <Button style={{marginTop:"20px"}} type="submit" color="primary" onClick={()=>{
        navigate("/")
    }}>Go Back</Button>
      <h1>Add User</h1>
      
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
            value={name}
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
          <br />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={email}
            type="text"
            name="email"
            onChange={handleChange}
            required
          />
          <br />
          <TextField
            id="standard-basic"
            label="Contact"
            variant="standard"
            value={contact}
            type="number"
            name="contact"
            onChange={handleChange}
            required
          />
          <br />
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            value={address}
            type="text"
            name="address"
            onChange={handleChange}
            required
          />
          <br />
          <Button   variant="contained" type="submit" color="primary">Submit</Button>
        </Box>
      
    </div>
  );
};
