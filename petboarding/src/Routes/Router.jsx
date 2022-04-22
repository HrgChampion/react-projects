import {Routes,Route} from 'react-router-dom';
import { AddListing } from '../Components/AddListing/AddListing';
import { Home } from '../Components/Home/Home';
import { ListingData } from '../Components/ListingData/ListingData';

export const Router=()=>{
    return(
        <div>
            
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/listing/create" element={<AddListing/>} />
                <Route path="/listing/:id" element={<ListingData/>} />
            </Routes>


        </div>
    )
}