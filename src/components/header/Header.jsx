import React, { useEffect, useRef, useState } from 'react'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'
import AvatarVideo from './AvatarVideo'

const Header = ({ onScrollDown, onNavigate }) => {
  const meRef = useRef(null);
  const isHoveringMe = useRef(false);
  const [metrics, setMetrics] = useState({ experience: 0, studies: 0, reporting: 0 })

  useEffect(() => {
    const targets = { experience: 5, studies: 100, reporting: 70 }
    const duration = 1400
    const startTime = performance.now()
    let animationFrame

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMetrics(targets)
      return undefined
    }

    const animateMetrics = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setMetrics({
        experience: Math.round(targets.experience * easedProgress),
        studies: Math.round(targets.studies * easedProgress),
        reporting: Math.round(targets.reporting * easedProgress),
      })

      if (progress < 1) animationFrame = window.requestAnimationFrame(animateMetrics)
    }

    animationFrame = window.requestAnimationFrame(animateMetrics)
    return () => window.cancelAnimationFrame(animationFrame)
  }, [])

  const handleMouseMove = (e) => {
    if (!meRef.current) return;
    
    if (isHoveringMe.current) {
      meRef.current.style.transform = `translateX(-50%) perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.02)`;
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

    meRef.current.style.transform = `translateX(-50%) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    meRef.current.style.boxShadow = `${shadowX}px ${shadowY}px 25px rgba(0, 0, 0, 0.3)`;
  }

  const handleMouseLeave = () => {
    if (!meRef.current) return;
    // Reset to flat when mouse leaves header
    meRef.current.style.transform = `translateX(-50%) perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    meRef.current.style.boxShadow = `0 0 15px rgba(0, 0, 0, 0.1)`;
  }

  return (
    <header onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Govind S</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <p className='header_intro'>Building cloud-native healthcare systems and AI-powered workflows with Java, Spring Boot, React, and GCP.</p>
        <CTA onNavigate={onNavigate} />
        <ul className='header_proof' aria-label='Professional highlights'>
          <li><strong>{metrics.experience}+</strong><span>years experience</span></li>
          <li><strong>{metrics.studies}k+</strong><span>medical studies migrated</span></li>
          <li><strong>{metrics.reporting}%</strong><span>less manual reporting</span></li>
        </ul>
        <HeaderSocials />
        <div 
          className='card' 
          ref={meRef}
          onMouseEnter={() => isHoveringMe.current = true}
          onMouseLeave={() => isHoveringMe.current = false}
        >
          {/* <img src={ME} alt="me" /> */}
          <AvatarVideo />
        </div>

        <a
          href='#contact'
          className='scroll_down'
          onClick={(event) => {
            event.preventDefault()
            onScrollDown()
          }}
        >
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header