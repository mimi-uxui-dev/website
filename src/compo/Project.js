import React from 'react'
import './assets/hoverIMG.css'
import eye1 from './assets/eyy.png'
import gh from './assets/gh.png'


function Project({ imgURL, eyeHref, ghHref, }) {
     return (

          <div class="container123">
               <img src={imgURL} class="image123" />
               <div class="overlay123">

                    <a className='eye1icon' href={eyeHref}><img src={eye1} alt="" /></a>
                    <a className='gh1icon' href={ghHref}><img src={gh} alt="" /></a>
               </div>
          </div>


     )
}

export default Project
