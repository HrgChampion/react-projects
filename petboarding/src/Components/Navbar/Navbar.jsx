import {Link} from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-container'>
            <Link to="/"><div>Home</div> </Link>
            <Link to="/register"><div>Register</div> </Link>
            <Link to="/login"><div>Login</div></Link>
            </div>
        </div>
    )
}