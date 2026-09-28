import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>  
      <h2>My Skills</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Core Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Java/Spring Boot</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Microservices</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Reactjs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>RESTful APIs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
          <h3>AI & ML</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Gen AI Integration</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Google Vertex AI</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Agent Development</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
          <h3>Cloud & DevOps</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Docker/K8s</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>GCP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Git/Maven/Agile</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
          <h3>Data & Streaming</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Kafka/RabbitMQ</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>MySQL/NoSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div>
                <h4>Hibernate/JPA</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience