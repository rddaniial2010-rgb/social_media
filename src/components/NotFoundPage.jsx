
import {NavLink} from "react-router-dom";

export default function NotFoundPage(){
    return(
        <div className="profile-container">
            <p className="notfound-text">Sorry this page is under construction</p>
            <NavLink className='nav-items' to="/">Home</NavLink>
        </div>
    )
}