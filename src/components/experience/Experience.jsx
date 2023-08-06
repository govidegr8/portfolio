import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>  
      <h2>My Experience</h2>
      <div className='container experience_container'>
      <div className='exprience_frontend'>
        <h3>Frontend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon' />
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon' />
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon' />
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon' />
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon' />
            <h4>Antd</h4>
            <small className='text-light'>Experienced</small>
          </article>
        </div>
      </div>
      <div className='experience_backend'>
      <h3>Backend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon' />
            <h4>Java</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon' />
            <h4>Spring/SpringBoot</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon' />
            <h4>MySql</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon' />
            <h4>Cassandra</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon' />
            <h4>Neo4j</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon' />
            <h4>Solr</h4>
            <small className='text-light'>Experienced</small>
          </article>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience