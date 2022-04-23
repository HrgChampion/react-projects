
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export const Notfound=()=>{
    const navigate = useNavigate();
    return(
        <div>
        <div>
        <Button style={{margin:"20px"}} type="submit" color="primary" onClick={()=>{
        navigate("/userhome")
    }}>Go Back</Button>
    </div>
    <div>
            <img src="https://cdn.dribbble.com/users/644529/screenshots/2662296/404.gif" alt="404"/>
            </div>
        </div>
    )
}