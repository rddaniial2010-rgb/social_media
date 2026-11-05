import React from 'react';
import './Profile.css'
import khabib from './khabib-nurmagomedov-2.jpg'

export default function Profile(){
    return(
        <div className='profile-container'>
            <div className='picture'>
                <img className='khabib-big' src={khabib} alt="khabib" />
                <h2 className='main-name'>Khabib Nurmagomedov</h2>
            </div>
            <div className='details'>
                <h2 className='my-posts'>My post</h2>
                <form action="">
                    <input className='add-text' type="text" placeholder='' />
                    <button className='add-post'>Add post</button>
                </form>
                
            </div>
            <div className='post'>
                <img className='small-khabib' src={khabib} alt="khabib" />
                <p className='name'>Khabib Nurmagomedov</p>
                <p className='some-text'>Khabib Nurmagomedov is a retired Russian mixed martial artist who finished his career with a flawless, undefeated professional record of 29 wins and 0</p>

            </div>
        </div>
       
    )
}