import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {Navigate, useNavigate} from "react-router-dom";
import { loadUsers, removeUsers } from "../../Redux/action";

export const Home = () => {
  const { users } = useSelector((state) => state.users.users);

  const dispatch = useDispatch();
const navigate=useNavigate();
  useEffect(() => {
    dispatch(loadUsers(users));
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
const handleDelete = (id,event) => {  
    event.preventDefault();
    dispatch(removeUsers(id));
     dispatch(loadUsers(users));
}

  return (
    <div>
<div>
<Button variant="contained" color="primary" style={{marginTop:"20px"}} onClick={()=>{
    navigate("/addUser")
}}>Add</Button>
</div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table" style={{marginTop:"50px"}}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th">{user.name}</StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button style={{marginRight:"10px"}} color="secondary" onClick={(e)=>{
                        handleDelete(user.id,e)
                    }}>Delete</Button>
                    <Button color="primary" onClick={()=>{
                      navigate(`/editUser/${user.id}`)
                    }}>Edit</Button>
                  </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
