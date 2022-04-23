
import {Routes,Route, Navigate} from 'react-router-dom';
import { AddListing } from '../Components/AddListing/AddListing';
import { AddPet } from '../Components/AddPet/AddPet';
import { AllPets } from '../Components/AllPets/AllPets';
import { Home } from '../Components/Home/Home';
import { ListingData } from '../Components/ListingData/ListingData';
import { Login } from '../Components/Login/Login';
import { Navbar } from '../Components/Navbar/Navbar';
import { Notfound } from '../Components/Notfound/Notfound';
import { PetDetail } from '../Components/PetDetail/PetDetail';
import { Register } from '../Components/Register/Register';
import { UserHome } from '../Components/UserHome/UserHome';
import { Navi } from '../Navigate/Navigate';

export const Router=()=>{
    return(
        <div>
            <Navbar/>
            
            <Routes>
                <Route path="/" element={<Navi/>} />
                <Route path="/admin" element={<Home/>} />
                <Route path="/userhome" element={<UserHome/>} />
                <Route path="/listing/create" element={<AddListing/>} />
                <Route path="/pets/create" element={<AddPet/>} />
                <Route path="/listing/:id" element={<ListingData/>} />
                <Route path="/pets/:id" element={<PetDetail/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/allpets" element={<AllPets/>} />
                <Route path="*" element={<Notfound/>} />
            </Routes>


        </div>
    )
}