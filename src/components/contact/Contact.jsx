import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n8gxtmr', 'template_zjz2ouq', form.current, 'tp5e5vBFI_MoOm0zs')
    e.target.reset()
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
          <a href="mailto:govindsuresh01@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className='contact_option'>
          <RiMessengerLine className='contact_option_icon'/>
          <h4>Messenger</h4>
          <h5>Govind S</h5>
          <a href="https://m.me/govind.s" target="_blank">Send a message</a>
        </article>
        <article className='contact_option'>
          <BsWhatsapp className='contact_option_icon'/>
          <h4>Whatsapp</h4>
          <h5>Govind</h5>
          <a href="https://wa.me/+916238771568" target='_blank'>Send a message</a>
        </article>
        </div>
        {/* End of contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required  />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact