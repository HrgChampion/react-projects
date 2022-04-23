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
import { fetchListing } from "../../Redux/action";
import { Link, useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

export const Home = () => {
  const { listings,loading } = useSelector((state) => state.listings);
  const { price, city, verified, rating } = listings;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListing());
  }, []);

  const navigate = useNavigate();
  const handleChangeVerify = (id, event) => {
    let newlistings = listings.filter((listing) => {
      if (listing.verified === event.props.value) {
        return listing;
      }
    });
    dispatch(fetchListing(newlistings));
   
  };


  const handleChangeCity = (id, event) => {
   dispatch(fetchListing(listings));
    let newlistings = listings.filter((listing) => {
      if (listing.city === event.props.value) {
        return listing;
      }
    });
    dispatch(fetchListing(newlistings));
    
    
    
  };
  const handleSort = (value) => {
    if (value == rating) {
      listings.sort((a, b) => {
        return a.rating - b.rating;
      });
    }

    dispatch(fetchListing(listings));
  };

  const handleSortByPrice = (value) => {
    if (value == price) {
      listings.sort((a, b) => {
        return a.price - b.price;
      });
    }
    dispatch(fetchListing(listings));
  };

  return loading?<img src="https://c.tenor.com/A17aJ1ZniiUAAAAM/dog-walking.gif" alt="loading..."/>: (
    <div>
      <div style={{ display: "flex" }}>
        <Button
          variant="contained"
          style={{ margin: "50px" }}
          onClick={() => {
            navigate("/listing/create");
          }}
        >
          Add Listing
        </Button>
        <br />
        <br />
        <Button
          variant="text"
          style={{ margin: "50px" }}
          onClick={() => {
            handleSortByPrice(price);
          }}
        >
          Sort By Cost
        </Button>
        <Button
          variant="text"
          style={{ margin: "50px" }}
          onClick={() => {
            handleSort(rating);
          }}
        >
          Sort By Rating
        </Button>

        <Box sx={{ minWidth: 180 }} style={{ margin: "50px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Filter By Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChangeVerify}
            >
              <MenuItem value={true}>Verified</MenuItem>
              <MenuItem value={false}>Not Verified</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 180 }} style={{ margin: "50px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Filter By City
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChangeCity}
            >
              <MenuItem value="Boston">Boston</MenuItem>
              <MenuItem value="New York">New York</MenuItem>
              <MenuItem value="Chikago">Chikago</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>All Pet Listing Details</caption>
          <TableHead>
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
              <TableRow
                key={row.id}
                onClick={() => {
                  navigate(`/listing/${row.id}`);
                }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>

                <TableCell align="center">{row.city}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.capacity}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">
                  {row.verified ? "Yes" : "No"}
                </TableCell>
                <TableCell align="center">{row.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
