import React from 'react';
import './dialogs.css';
import DialogPersona from './dialogsPersona/DialogPersona';



export default function Dialogs(){
    return(
         <div className='dialogs profile-container'>
                <div className='dialogs-names'>
                    <DialogPersona id={'1'} name={'Islam Makhachev'}/>
                    {/* <p className='mackhachev'>Islam Makhachev</p>
                    <p className='abdulmanap'>Abdulmanap Nurmagomedov</p>
                    <p className='mcgregor'>Conor Mcgregor</p> */}
                </div>

                <div className='dialogs-messages'>
                    <p className='messages'>
                        lets go get food.
                    </p>
                    <p className='messages'>
                        TIme to train.
                    </p>
                    <p className='messages'>
                        Lets fight!
                    </p>

                </div>

                <div className='dialogs-input'>
                    <input className='answer' placeholder='Enter your message' type="text" />
                    <button className='send'>Send message</button>
                </div>
            </div>
    )
}