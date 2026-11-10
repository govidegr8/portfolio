/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = ({ onNavigate }) => {
  const links = [
    ['Home', 'home'],
    ['About', 'about'],
    ['Experience', 'experience'],
    ['Portfolio', 'portfolio'],
    ['Certifications', 'certifications'],
    ['Contact', 'contact'],
  ]

  return (
    <footer>
      <a href="#" className='footer_logo' onClick={(event) => { event.preventDefault(); onNavigate('home') }}>GOVIND</a>
      <ul className='permalinks'>
        {links.map(([label, id]) => (
          <li key={id}>
            <a href={`#${id}`} onClick={(event) => { event.preventDefault(); onNavigate(id) }}>{label}</a>
          </li>
        ))}
      </ul>
      <div className='footer_socials'>
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><FiTwitter /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Govind. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer