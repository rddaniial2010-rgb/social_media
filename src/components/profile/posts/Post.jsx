import React from 'react';
import khabib from '../../profile/khabib-nurmagomedov-2.jpg';
import './post.css'

export default function Post(props){
    return(
        <div>
             <img className='small-khabib' src={khabib} alt="khabib" />
                <span className='name'>Khabib Nurmagomedov</span>
                <p className='some-text'>{props.message}</p>
                
        </div>
    )
}



// Khabib Nurmagomedov is a retired Russian mixed martial artist who finished his career with a flawless, undefeated professional record of 29 wins and 0