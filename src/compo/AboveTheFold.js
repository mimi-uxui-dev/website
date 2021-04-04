import React from 'react'
import './assets/abovethefold.css'
import Myimg from './assets/01.png';


function AboveTheFold() {
     return (
          <div className="AboveTheFoldContainer">
               <div className='AboveTheFoldTEXT'  >
                    <p className='text16'>Greetings my friend,</p>
                    <p className='text32'>My name’s Mimi</p>
                    <p className='text24'>Front-End Developer & UX/UI Designer</p>
                    <p className='text18'>I passionly design & code experiences adored by people, which empower and connect to solutions that facilitate users life.</p>
                    <br />
                    <a className='ViewMyWorkBTN' id='ViewMyWorkBTN'>View my Work</a>
               </div>
               <div className='AboveTheFoldIMG' >
                    <img width='500' height='auto' src={Myimg} alt="" />
               </div>
          </div >
     )
}

export default AboveTheFold