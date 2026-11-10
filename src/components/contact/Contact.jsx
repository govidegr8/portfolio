import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from'react-icons/bs'
import { useRef, useState } from 'react';
import { sendContactMessage } from '../../services/contactService'

const Contact = () => {

  const form = useRef();
  const [status, setStatus] = useState('idle')

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus('sending')
    sendContactMessage(form.current)
      .then(() => {
        e.target.reset()
        setStatus('success')
      })
      .catch((error) => {
        console.error('Contact form delivery failed:', error)
        setStatus(error.message === 'Email service is not configured.' ? 'unconfigured' : 'error')
      })
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
        <article className='contact_option'>
          <MdOutlineEmail className='contact_option_icon'/>
          <h4>Email</h4>
          <h5>govindsuresh01@gmail.com</h5>
          <a href="mailto:govindsuresh01@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className='contact_option'>
          <BsWhatsapp className='contact_option_icon'/>
          <h4>Whatsapp</h4>
          <h5>Govind</h5>
          <a href="https://wa.me/+916238771568" target='_blank' rel="noreferrer">Send a message</a>
        </article>
        </div>
        {/* End of contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="contact-name">Your full name</label>
          <input id="contact-name" type="text" name='name' placeholder='Your Full Name' required />
          <label htmlFor="contact-email">Your email</label>
          <input id="contact-email" type="email" name='email' placeholder='Your Email' required  />
          <label htmlFor="contact-message">Your message</label>
          <textarea id="contact-message" name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p className="form_status success" role="status">Message sent successfully.</p>}
          {status === 'unconfigured' && <p className="form_status error" role="alert">Email sending is not configured yet. Please use the email link directly.</p>}
          {status === 'error' && <p className="form_status error" role="alert">Something went wrong. Please try again or email me directly.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact