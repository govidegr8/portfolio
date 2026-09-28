import React, { useRef } from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  const meRef = useRef(null);
  const isHoveringMe = useRef(false);

  const handleMouseMove = (e) => {
    if (!meRef.current) return;
    
    if (isHoveringMe.current) {
      meRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.02)`;
      meRef.current.style.boxShadow = `0 1.5rem 3rem rgba(0, 0, 0, 0.5)`;
      return;
    }
    
    const { innerWidth, innerHeight } = window;
    
    // Calculate mouse position relative to center of screen (-1 to 1)
    const xAxis = (e.clientX / innerWidth - 0.5) * 2;
    const yAxis = (e.clientY / innerHeight - 0.5) * 2;

    // Multiply to get rotation degrees (max 20deg tilt)
    const rotateX = yAxis * -20; 
    const rotateY = xAxis * 20;

    // Dynamic shadow opposite to the tilt direction
    const shadowX = xAxis * -15;
    const shadowY = yAxis * -15 + 10;

    meRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    meRef.current.style.boxShadow = `${shadowX}px ${shadowY}px 25px rgba(0, 0, 0, 0.3)`;
  }

  const handleMouseLeave = () => {
    if (!meRef.current) return;
    // Reset to flat when mouse leaves header
    meRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    meRef.current.style.boxShadow = `0 0 15px rgba(0, 0, 0, 0.1)`;
  }

  return (
    <header onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Govind S</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div 
          className='me' 
          ref={meRef}
          onMouseEnter={() => isHoveringMe.current = true}
          onMouseLeave={() => isHoveringMe.current = false}
        >
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header