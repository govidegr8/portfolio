import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import{BsYoutube} from 'react-icons/bs'

function HeaderSocials () {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/govind-s-b803b0158/' target="blank"><BsLinkedin /></a>
        <a href='https://github.com/govidegr8' target="blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials; 