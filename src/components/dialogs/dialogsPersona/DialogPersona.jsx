import React from 'react';
import {NavLink} from "react-router-dom"

export default function DialogPersona(props){
    return(
        <div>
            <NavLink className='mackhachev' to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}