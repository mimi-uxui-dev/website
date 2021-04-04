import React from 'react'
import './assets/abovethefold.css'
import Myimg from './assets/img500x500.png'

import disc from './assets/disco.svg'
import mail from './assets/mail.svg'
import ig from './assets/ig.svg'
import linkedin from './assets/in.svg'
import signal_app from './assets/signal.svg'


function ContactSection() {
     return (
          <div className="contactSection_Container" id='contactSection_Container'>
               <div className='contactSection_TEXT '>
                    <p className='contactSec_text32'>Let’s connect!</p>
                    <p className='contactSec_text16'>Feel free to reach out if you want to collaborate, connect, or just have a chat.</p>
               </div>
               <div className='contactSec_sm'>
                    <a href=""><img src={disc} alt="discord ux ui designer mimi.uxui#9030" /></a>
                    <a href=""><img src={mail} alt="ux ui designer mimi email uxui.mimi@gmail.com" /></a>
                    <a href=""><img src={ig} alt="ux ui designer mimi mimi_uxui" /></a>
                    <a href=""><img src={linkedin} alt="" /></a>
                    <a href=""><img src={signal_app} alt="+213698235548" /></a>
               </div>
          </div>
     )
}

export default ContactSection