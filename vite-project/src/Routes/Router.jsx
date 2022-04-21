import { Routes,Route } from "react-router-dom"
import { AddUser } from "../Components/AddUser/AddUser"
import { EditUser } from "../Components/EditUser/EditUser"
import { Home } from "../Components/Home/Home"


export const Router=()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/addUser" element={<AddUser/>} />
                <Route path="/editUser/:id" element={<EditUser/>} />
            </Routes>
        </div>
    )
}