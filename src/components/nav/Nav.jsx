import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBook} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDots} from 'react-icons/bi'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} 
                  className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={()=> setActiveNav('#about')}
                  className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')}
                            className={activeNav === '#experience' ? 'active' : ''}><FiBook /></a>
      <a href='#testimonials' onClick={()=> setActiveNav('#testimonials')}
                          className={activeNav === '#testimonials' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')}
                          className={activeNav === '#contact' ? 'active' : ''}><BiMessageDots /></a>
    </nav>
  )
}

export default Nav