/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBook} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDots} from 'react-icons/bi'
import {BiBriefcase} from 'react-icons/bi'
import {AiOutlineProject} from 'react-icons/ai'

function Nav({ activeSection, onNavigate }) {
  const links = [
    { id: 'home', icon: <AiOutlineHome /> },
    { id: 'about', icon: <AiOutlineUser /> },
    { id: 'experience', icon: <FiBook /> },
    { id: 'work', icon: <BiBriefcase /> },
    { id: 'portfolio', icon: <AiOutlineProject /> },
    { id: 'certifications', icon: <RiServiceLine /> },
    { id: 'contact', icon: <BiMessageDots /> },
  ]

  return (
    <nav>
      {links.map(({ id, icon }, index) => (
        <a
          href={`#${id}`}
          key={id}
          onClick={(event) => {
            event.preventDefault()
            onNavigate(index)
          }}
          className={activeSection === index ? 'active' : ''}
          aria-label={`Go to ${id}`}
          aria-current={activeSection === index ? 'page' : undefined}
        >
          {icon}
        </a>
      ))}
    </nav>
  )
}

export default Nav