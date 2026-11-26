import React from 'react';
import './Profile.css';
import khabib from './khabib-nurmagomedov-2.jpg';
import khabib2 from './3rd khabib.png';
import khabib3 from './images.png';
import Post from './posts/Post';

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
        <Post img={khabib} message=" Khabib Nurmagomedov is a retired Russian mixed martial artist who finished his career with a flawless, undefeated professional record of 29 wins and 0"/>
         <Post img={khabib2}  message="Undefeated Record: He retired with a perfect professional record of 29–0"/>
          <Post img={khabib3}  message="He is the longest-reigning UFC Lightweight Champion in history, holding the title for 1,134 days"/>
            

           
        </div>
       
    )
}