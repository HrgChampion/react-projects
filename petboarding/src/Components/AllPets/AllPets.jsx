import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPetdetails } from "../../Redux/action";
import { Link, useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

export const AllPets=()=>{

    const { pets,loading } = useSelector((state) => state.pets);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchPetdetails());
      }, []);


    return loading?<img className="loading-gif" src="https://c.tenor.com/A17aJ1ZniiUAAAAM/dog-walking.gif" alt="loading..."/>: (
        <div>

        <br/>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>All Pet Details</caption>
          <TableHead>
            <TableRow>
              <TableCell align="center"><b>S.No.</b></TableCell>
              <TableCell align="center"><b>Name</b></TableCell>
              <TableCell align="center"><b>Category</b></TableCell>
              <TableCell align="center"><b>Breed</b></TableCell>
              <TableCell align="center"><b>Age</b></TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {pets.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => {
                  navigate(`/pets/${row.id}`);
                }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>

                <TableCell align="center">{row.category}</TableCell>
                <TableCell align="center">{row.breed}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
             
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </div>
    )
}