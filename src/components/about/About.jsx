import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { BsAwardFill } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { FaFolderPlus } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <BsAwardFill className='about_icon' />
              <h5>Experience</h5>
              <small>4+ Years of Working</small>
            </article>
            <article className='about_card'>
              <FaUsers className='about_icon' />
              <h5>Companies</h5>
              <small>2+ Companies</small>
            </article>
            <article className='about_card'>
              <FaFolderPlus className='about_icon' />
              <h5>Projects</h5>
              <small>5+ Completed projects</small>
            </article>
          </div>
          <p>I am a Software Engineer with over 4 years of experience specializing in high-scale Microservices and AI-integrated applications. Proven track record in architecting healthcare solutions using Java, Spring Boot and Reactjs, with expertise in Gen AI agents and medical imaging standards. A hands-on engineer skilled in guiding cross-functional teams through the full SDLC, from defining technical roadmaps to deploying cloud-native architectures. Committed to performance optimization and the strategic implementation of emerging technologies to solve complex clinical and business challenges.</p>
          <a href="#contact" className='btn btn_primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About