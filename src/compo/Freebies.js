import React from 'react'
import './assets/freebies.css'
import eye from './assets/eye.png'
import download from './assets/down.png'

function Freebies() {

     const data = [
          {
               id: 1,
               title: 'Tiiiiiiiitle',
               img: 'http://placehold.it/250x200.jpg',
               desc: 'bla bla blii',
               imgsContent: [
                    'http://placehold.it/250x200.jpg', 'http://placehold.it/250x200.jpg', 'http://placehold.it/250x200.jpg'
               ]
          }
     ]

     return (
          <div className='freebiesContainer'>

               <div className='freebiesContainerTXT'>
                    <p className='freebies_text32'>Free Design Resources</p>
                    <p className='freebies_text18'>Hand-picked resources for designers & developers</p>

               </div>

               <div className="freebiesContent">



                    <div class="img__wrap">
                         <img class="img__img" src="http://placehold.it/250x200.jpg" />
                         <p class="img__description">
                              <a href=""><img src={download} alt="" /></a>
                              <a href=""><img src={eye} alt="" /></a>
                         </p>
                    </div>

                    <div class="img__wrap">
                         <img class="img__img" src="http://placehold.it/250x200.jpg" />
                         <p class="img__description">
                              <a href=""><img src={download} alt="" /></a>
                              <a href=""><img src={eye} alt="" /></a>
                         </p>
                    </div>

                    <div class="img__wrap">
                         <img class="img__img" src="http://placehold.it/250x200.jpg" />
                         <p class="img__description">
                              <a href=""><img src={download} alt="" /></a>
                              <a href=""><img src={eye} alt="" /></a>
                         </p>
                    </div>
                    <div class="img__wrap">
                         <img class="img__img" src="http://placehold.it/250x200.jpg" />
                         <p class="img__description">
                              <a href=""><img src={download} alt="" /></a>
                              <a href=""><img src={eye} alt="" /></a>
                         </p>
                    </div>

                    <div class="img__wrap">
                         <img class="img__img" src="http://placehold.it/250x200.jpg" />
                         <p class="img__description">
                              <a href=""><img src={download} alt="" /></a>
                              <a href=""><img src={eye} alt="" /></a>
                         </p>
                    </div>

                    <div class="img__wrap">
                         <img class="img__img" src="http://placehold.it/250x200.jpg" />
                         <p class="img__description">
                              <a href=""><img src={download} alt="" /></a>
                              <a href=""><img src={eye} alt="" /></a>
                         </p>
                    </div>

                    <div class="img__wrap">
                         <img class="img__img" src="http://placehold.it/250x200.jpg" />
                         <p class="img__description">
                              <a href=""><img src={download} alt="" /></a>
                              <a href=""><img src={eye} alt="" /></a>
                         </p>
                    </div>

                    <div class="img__wrap">
                         <img class="img__img" src="http://placehold.it/250x200.jpg" />
                         <p class="img__description">
                              <a href=""><img src={download} alt="" /></a>
                              <a href=""><img src={eye} alt="" /></a>
                         </p>
                    </div>

                    <div class="img__wrap">
                         <img class="img__img" src="http://placehold.it/250x200.jpg" />
                         <p class="img__description">
                              <a href=""><img src={download} alt="" /></a>
                              <a href=""><img src={eye} alt="" /></a>
                         </p>
                    </div>






               </div>
          </div>
     )
}

export default Freebies