import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const AddListing = () => {
    
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    const handleChange=(e)=>{
        let {name,value}=e.target;
    }
    
    return (
        <div>
         <Button style={{margin:"20px"}} type="submit" color="primary" onClick={()=>{
        navigate("/")
    }}>Go Back</Button>   

<Box style={{marginLeft:"500px"}}
        
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
            
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
          <br />
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            
            type="text"
            name="address"
            onChange={handleChange}
            required
          />
          <br />
          <TextField
            id="standard-basic"
            label="City"
            variant="standard"
            
            type="city"
            name="contact"
            onChange={handleChange}
            required
          />
          <br />
          <TextField
            id="standard-basic"
            label="Price"
            variant="standard"
           
            type="text"
            name="price"
            onChange={handleChange}
            required
          />
          <br />
          <TextField
            id="standard-basic"
            label="Rating"
            variant="standard"
           
            type="text"
            name="rating"
            onChange={handleChange}
            required
          />
          <br />
          <FormControlLabel control={<Checkbox  />} label="Verified" />
          <br />
          <Button   variant="contained" type="submit" color="primary">Submit</Button>
        </Box>
        </div>
    )
}