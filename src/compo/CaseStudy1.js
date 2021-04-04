import React from 'react'
import './assets/abovethefold.css'
import Myimg from './assets/img500x500.png';


function CaseStudy1() {
     return (
          <div className="CaseStudy1Container">
               <div className='CaseStudy1TEXT '>
                    <p className='text16'>- 2020</p>
                    <p className='cs1_text32'>Acclaimed books right to your phone — a UX case study.</p>
                    <p className='cs1_text18'>The design process for creating Genius: Bookify’s reward program.</p>
                    <br />
                    <a className='viewCS' href="" >View Case Study →</a>
               </div>
               <div className='CaseStudy1IMG'>
                    <img src={Myimg} alt="" />
               </div>
          </div>
     )
}

export default CaseStudy1