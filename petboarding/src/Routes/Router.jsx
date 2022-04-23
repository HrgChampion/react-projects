import {Routes,Route} from 'react-router-dom';
import { AddListing } from '../Components/AddListing/AddListing';
import { Home } from '../Components/Home/Home';
import { ListingData } from '../Components/ListingData/ListingData';
import { Login } from '../Components/Login/Login';
import { Navbar } from '../Components/Navbar/Navbar';
import { Notfound } from '../Components/Notfound/Notfound';
import { Register } from '../Components/Register/Register';

export const Router=()=>{
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/listing/create" element={<AddListing/>} />
                <Route path="/listing/:id" element={<ListingData/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<Notfound/>} />
            </Routes>


        </div>
    )
}