import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './assets/header.css'
import logo from './assets/m.svg'
import menu from './assets/menu.svg'

function Header() {

     return (
          <div className='headerContainer animate__animated animate__fadeInDown'  >
               <div className='hideMenu'>
                    <Link className='menuLogo' to='/' > <img src={logo} alt="" /> </Link>
                    <ul>
                         <li> <Link to='/'>HOME</Link> </li>

                         <li> <Link to='/about'>ABOUT</Link> </li>

                         <li className="headerContactBTN"><a id='headerContactBTN' >CONTACT</a></li>
                    </ul>
               </div>

               <div className="showMenu" >
                    <div className='menuMobContainer'>
                         <Link className='menuLogo' to='/' > <img src={logo} alt="" /> </Link>
                         <img className='menuBTN' src={menu} alt="" />
                    </div>


               </div>
               <div className='mobileMenu'>
                    <p className='xClose' >X</p>
                    <ul>
                         <li> <Link to='/'>HOME</Link> </li>

                         <li> <Link to='/about'>ABOUT</Link> </li>

                         <li><a id='headerContactBTN' >CONTACT</a></li>
                    </ul>
               </div>

          </div>
     )
}

export default Header