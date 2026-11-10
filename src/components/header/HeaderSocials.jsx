import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


function HeaderSocials () {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/govind-s-b803b0158/' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><BsLinkedin size={30}/></a>
        <a href='https://github.com/govidegr8' target="_blank" rel="noopener noreferrer" aria-label="GitHub"><BsGithub size={30}/></a>
    </div>
  )
}

export default HeaderSocials; 