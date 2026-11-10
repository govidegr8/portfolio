import React, { useCallback, useEffect, useRef, useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Work from './components/work/Work'
import Portfolio from './components/portfolio/Portfolio'
import Certifications from './components/certifications/Certifications'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const sectionIds = ['home', 'about', 'experience', 'work', 'portfolio', 'certifications', 'contact']

const App = () => {
  const [activeSection, setActiveSection] = useState(0)
  const touchStart = useRef(null)
  const isAnimating = useRef(false)

  const goToSection = useCallback((nextSection) => {
    const boundedSection = Math.max(0, Math.min(nextSection, sectionIds.length - 1))
    if (boundedSection === activeSection || isAnimating.current) return

    isAnimating.current = true
    setActiveSection(boundedSection)
    window.history.replaceState(null, '', boundedSection === 0 ? '#' : `#${sectionIds[boundedSection]}`)
    window.setTimeout(() => {
      isAnimating.current = false
    }, 750)
  }, [activeSection])

  const navigateTo = useCallback((sectionId) => {
    const sectionIndex = sectionIds.indexOf(sectionId)
    if (sectionIndex > -1) goToSection(sectionIndex)
  }, [goToSection])

  const goToFooter = () => {
    goToSection(sectionIds.length - 1)
    window.setTimeout(() => {
      const contactPanel = document.querySelector('.section_panel:last-child')
      contactPanel?.scrollTo({ top: contactPanel.scrollHeight, behavior: 'smooth' })
    }, 750)
  }

  const sections = [
    { id: 'home', component: <Header onScrollDown={goToFooter} onNavigate={navigateTo} /> },
    { id: 'about', component: <About onNavigate={navigateTo} /> },
    { id: 'experience', component: <Experience /> },
    { id: 'work', component: <Work /> },
    { id: 'portfolio', component: <Portfolio /> },
    { id: 'certifications', component: <Certifications /> },
    { id: 'contact', component: <><Contact /><Footer onNavigate={navigateTo} /></> },
  ]

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    const initialSection = sectionIds.indexOf(hash)
    if (initialSection > -1) setActiveSection(initialSection)

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 10) return

      const panel = event.target.closest('.section_panel')
      if (panel && panel.scrollHeight > panel.clientHeight) {
        const isAtTop = panel.scrollTop <= 0
        const isAtBottom = panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 1
        if ((event.deltaY < 0 && !isAtTop) || (event.deltaY > 0 && !isAtBottom)) return
      }

      event.preventDefault()
      goToSection(activeSection + (event.deltaY > 0 ? 1 : -1))
    }

    const handleKeyDown = (event) => {
      const target = event.target
      if (target instanceof HTMLElement && (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(target.tagName))) return

      if (['ArrowDown', 'PageDown', 'ArrowRight'].includes(event.key)) {
        event.preventDefault()
        goToSection(activeSection + 1)
      }
      if (['ArrowUp', 'PageUp', 'ArrowLeft'].includes(event.key)) {
        event.preventDefault()
        goToSection(activeSection - 1)
      }
      if (event.key === 'Home') goToSection(0)
      if (event.key === 'End') goToSection(sectionIds.length - 1)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeSection, goToSection])

  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientY
  }

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return
    const distance = touchStart.current - event.changedTouches[0].clientY
    if (Math.abs(distance) > 50) goToSection(activeSection + (distance > 0 ? 1 : -1))
    touchStart.current = null
  }

  return (
    <main className='page_shell' onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className='section_track' style={{ transform: `translateY(-${activeSection * 100}%)` }}>
        {sections.map(({ id, component }, index) => (
          <div className='section_panel' key={id} aria-hidden={activeSection !== index}>
            {component}
          </div>
        ))}
      </div>
      <Nav activeSection={activeSection} onNavigate={goToSection} />
    </main>
  )
}

export default App