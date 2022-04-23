import { useNavigate } from "react-router-dom";
import { UserHome } from "../Components/UserHome/UserHome";

export const Navi=()=>{
const navigate = useNavigate();

    return(
        <div>
            <UserHome/>
        </div>
    )
}