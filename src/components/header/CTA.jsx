import React from 'react'
import CV from '../../assets/cv.pdf'
function CTA({ onNavigate }) {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary' onClick={(event) => {
          event.preventDefault()
          onNavigate('contact')
        }}>Let's Talk</a>
    </div>
  )
}

export default CTA