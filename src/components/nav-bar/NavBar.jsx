import React from 'react';
import './nav-bar.css'
import {NavLink} from "react-router-dom"

export default function NavBar(){
    return(
        <div className='navbar'>
            <NavLink className='nav-items' to="/profile">profile</NavLink>
            <NavLink className='nav-items' to="/messages">messages</NavLink>
            <NavLink className='nav-items' to="/users">users</NavLink>
            <NavLink className='nav-items' to="/dialogs">dialogs</NavLink>
        </div>
    )
}