import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchListing } from '../../Redux/action';
import { Link,  useNavigate } from 'react-router-dom';

export const Home=()=>{
    const {listings}=useSelector(state=>state.listings);
    console.log(listings);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchListing());
    },[]);

    const navigate=useNavigate();
      
     
    return (
        <div>
            
            <Button variant="contained" style={{margin:"50px"}} onClick={()=>{
              navigate("/listing/create")
            }}>Add Listing</Button><br/>
            <br/>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>All Pet Listing Details</caption>
        <TableHead >
          <TableRow>
            
            <TableCell align="center">S.No.</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Capacity</TableCell>
            <TableCell align="center">Cost Per day</TableCell>
            <TableCell align="center">Verified</TableCell>
            <TableCell align="center">Rating</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {listings.map((row) => (
            <TableRow key={row.id} onClick={()=>{
              navigate(`/listing/${row.id}`)
            }} >
            <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center" >{row.name}
              </TableCell>
              
              <TableCell align="center">{row.city}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.capacity}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.verified?"Yes":"No"}</TableCell>
              <TableCell align="center">{row.rating}</TableCell>
              
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}