import React from 'react'
import './assets/aboutme.css'

function About() {
     return (
          <div className='about_container' >
               <div className='aboutme_txt'>
                    <p className='aboutme_txt16' >About me</p>
                    <p className='aboutme_txt32'>My background..</p>
                    <p className='aboutme_txt18'>
                         Hi, I'm Taous Khoudour! I also go by Mimi. <br /><br />



                         People are what I care about and how to make there life better, since our time on this planet is limited,
                         choosing a job that improves people's lives and enables me to find solutions to there problems is the noblest job to do and this is I want to have a career. <br /><br />

                         I'm a self-taught designer & developer, I've read plenty of books and blogs about UX design and user research, learned about concepts,
                         principles, theories, and processes of product design & UI, I applied all that knowledge in projects and in freelancer’s. <br /><br />

                         I'm hopefull to put my skills to use. I am goal-orientend, self-motivated, dependable,
                         empathatecic, great listener and communicator, and an ultracareful problem solver. <br /><br />

                         With everything I do, I intend to provide people with amazing experiences & take businesses and Product Design to the next level, towards the future.

                    </p>
               </div>

               <div className='aboutme_skills'>


                    <div className='aboutme_skills_dev'>
                         <p>FRONT-END DEVELOPEMENT</p>
                         <div>
                              <p>HTML/HTML5</p>
                              <p>CSS/CSS3</p>
                              <p>Javascript/ES6</p>
                              <p>ReactJS/Redux</p>
                              <p>Material-UI</p>
                              <p>Bootstrap</p>
                              <p>NodeJS</p>
                              <p>Git/Command Line</p>
                         </div>
                    </div>

                    <div className='aboutme_skills_des'>
                         <p>UX/UI DESIGN</p>
                         <div>
                              <p>Adobe Creative Suite</p>
                              <p>Figma</p>
                              <p>Framer</p>
                              <p>Invision Studio</p>
                              <p>Rive Animation</p>
                         </div>
                    </div>

                    <div className='aboutme_skills_lang'>
                         <p>I SPEAK</p>
                         <div>
                              <p>Human   - Native -</p>
                              <p>Arabic  - Native -</p>
                              <p>English - Fluent -</p>
                              <p>French  - Intermediate -</p>
                              <p>Spanish - Novice -</p>
                         </div>
                    </div>

               </div>

          </div>
     )
}

export default About