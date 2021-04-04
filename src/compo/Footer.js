import React from 'react'
import './assets/abovethefold.css'
import footerLogo from './assets/footerLogo.svg'
import MailchimpSubscribe from "react-mailchimp-subscribe"


const url = 'https://gmail.us1.list-manage.com/subscribe/post?u=e4cd2057fee387f4ada7faec0&amp;id=df30de3ec8'
const SimpleForm = () => <MailchimpSubscribe url={url} />


function Footer() {

     return (
          <div className='footer_container' >
               <div className='footer_newsletter'>
                    <p>I’ll sent you a letter from now & then  💖</p>
                    <MailchimpSubscribe
                         url={url}
                         render={({ subscribe, status, message }) => (
                              <div>
                                   <SimpleForm onSubmitted={formData => subscribe(formData)} />
                                   {status === "sending" && <div style={{ color: "blue", padding: '10px' }}>sending...</div>}
                                   {status === "error" && <div style={{ color: "red", padding: '10px' }} dangerouslySetInnerHTML={{ __html: message }} />}
                                   {status === "success" && <div style={{ color: "green", padding: '10px' }}>Subscribed !</div>}
                              </div>
                         )}
                    />

               </div>

               <div className='footer_links'>
                    <a href="">Home</a>
                    <a href="">Work</a>
                    <a href="">Resume + CV</a>
                    <a href="">About</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                    <a href="">Freebies</a>
               </div>


               <a href="" className='footer_logo'><img src={footerLogo} alt="Mimi UI UX Designer" /></a>


               <p className='footer_rights'>All Right Reserved Mimi Taous Khoudour 2021</p>
          </div>
     )
}

export default Footer
