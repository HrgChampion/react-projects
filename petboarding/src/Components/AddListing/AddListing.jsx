import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { addPet } from "../../Redux/action";

export const AddListing = () => {
    
    const [state, setState] = useState({
        name: "",
        address: "",
        city:"",
        price: "",
        rating: "",
        verified: false

    });
    
      const dispatch=useDispatch();
      const { name,address,city,price,rating,verified,capacity} = state;
      const navigate = useNavigate();
    
      const handleChange = (e) => {
          let {name,value,type,checked} = e.target;
          if(type=="checkbox"){
              value=checked?true:false;
          }
            setState({
                ...state,
                [name]:value
            })
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            if(!name || !city || !price || !address || !rating || !capacity)  {
                alert("Please fill all the fields");
                return;
            }
            
           dispatch(addPet(state));
            alert("Details added successfully");
            navigate("/admin");
        }
    
    return (
        <div>
         <Button style={{margin:"20px"}} type="submit" color="primary" onClick={()=>{
        navigate("/admin")
    }}>Go Back</Button>   

<Box style={{marginLeft:"500px"}}
        
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "35ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
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
            label="Capacity"
            variant="standard"
            
            type="city"
            name="capacity"
            onChange={handleChange}
            required
          />
          <br />
          <TextField
            id="standard-basic"
            label="City"
            variant="standard"
            
            type="city"
            name="city"
            onChange={handleChange}
            required
          />
          <br />
          <TextField
            id="standard-basic"
            label="Price"
            variant="standard"
           
            type="number"
            name="price"
            onChange={handleChange}
            required
          />
          <br />
          <TextField
            id="standard-basic"
            label="Rating"
            variant="standard"
            placeholder="0-5"
            type="text"
            name="rating"
            onChange={handleChange}
            required
          />
          <br />
          <FormControlLabel control={<Checkbox  />} label="Verified" type="checkbox" />
          <br />
          <Button   variant="contained" type="submit" color="primary">Submit</Button>
        </Box>
        </div>
    )
}