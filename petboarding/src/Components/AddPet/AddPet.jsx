import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { addPetdetails } from "../../Redux/action";

export const AddPet=()=>{
        
        const [state, setState] = useState({
            name: "",
            breed: "",
            category: "",
            age:"",
    
        });
        
          const dispatch=useDispatch();
          const {name,breed,category,age } = state;
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
                if(!name||!breed||!category||!age)  {
                    alert("Please fill all the fields");
                    return;
                }
                
               dispatch(addPetdetails(state));
                alert("Details added successfully");
                navigate("/allpets");
            }
        
        return (
            <div>
             <Button style={{margin:"20px"}} type="submit" color="primary" onClick={()=>{
            navigate("/userhome")
        }}>Go Back</Button>   
        <Button style={{margin:"20px"}} type="submit" color="primary" onClick={()=>{
            navigate("/allpets")
        }}>All Pet Details </Button> 
    
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
                label="Pet Name"
                variant="standard"
                
                type="text"
                name="name"
                onChange={handleChange}
                required
              />
              <br />
              <TextField
                id="standard-basic"
                label="Pet Breed"
                variant="standard"
                
                type="text"
                name="breed"
                onChange={handleChange}
                required
              />
              <br />
              <TextField
                id="standard-basic"
                label="Category"
                variant="standard"
                
                type="city"
                name="category"
                onChange={handleChange}
                required
              />
              <br />
              <TextField
                id="standard-basic"
                label="Age"
                variant="standard"
                
                type="number"
                name="age"
                onChange={handleChange}
                required
              />
              
              <br />
              <Button   variant="contained" type="submit" color="primary">Submit</Button>
            </Box>
            </div>
        )
    }