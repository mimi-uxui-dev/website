import React from 'react'
import CaseStudy1 from './CaseStudy1'
import Project from './Project'


function Work() {
     return (
          <div className='about_container' >
               <div className='aboutme_txt'>
                    <p className='aboutme_txt32'>My recent work</p>

                    <div className='cs_worksec'>
                         <Project />
                         <Project />
                         <Project />
                    </div>

               </div>
          </div>
     )
}

export default Work
