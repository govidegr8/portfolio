import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


function HeaderSocials () {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/govind-s-b803b0158/' target="blank"><BsLinkedin size={30}/></a>
        <a href='https://github.com/govidegr8' target="blank"><BsGithub size={30}/></a>
    </div>
  )
}

export default HeaderSocials; 