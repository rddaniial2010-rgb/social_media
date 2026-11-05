import React from 'react';
import './nav-bar.css'


export default function NavBar(){
    return(
        <div className='navbar'>
            <a className='nav-items' href="">profile</a>
            <a className='nav-items' href="">messages</a>
            <a className='nav-items' href="">users</a>
        </div>
    )
}