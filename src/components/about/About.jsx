import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {FaFolderPlus} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <BsAwardFill className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years of Working</small>
            </article>
            <article className='about_card'>
              <FaUsers className='about_icon' />
              <h5>Companies</h5>
              <small>Just one yet</small>
            </article>
            <article className='about_card'>
              <FaFolderPlus className='about_icon' />
              <h5>Projects</h5>
              <small>10+ Completed projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis velit laborum ex illum architecto? Velit officiis error explicabo, dolorum non vel recusandae mollitia, iure inventore quos, quia voluptatibus libero quidem?</p>
          <a href="#contact" className='btn btn_primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About