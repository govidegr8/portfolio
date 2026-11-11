import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>The Skills I Have</h5>  
      <h2>My Skills</h2>
      <div className='container skills_container'>
        <div className='skills_development'>
          <h3>Core Development</h3>
          <p className='skills_category_intro'>Backend services, APIs, and frontend delivery</p>
          <div className='skills_content'>
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details_icon' />
              <div>
                <h4>Java/Spring Boot</h4>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details_icon' />
              <div>
                <h4>Microservices</h4>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details_icon' />
              <div>
                <h4>Reactjs</h4>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details_icon' />
              <div>
                <h4>RESTful APIs</h4>
              </div>
            </article>
          </div>
        </div>

        <div className='skills_ai'>
          <h3>AI & ML</h3>
          <p className='skills_category_intro'>Practical AI features and intelligent workflows</p>
          <div className='skills_content'>
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details_icon' />
              <div>
                <h4>Gen AI Integration</h4>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details_icon' />
              <div>
                <h4>Google Vertex AI</h4>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details_icon' />
              <div>
                <h4>Agent Development</h4>
              </div>
            </article>
          </div>
        </div>

        <div className='skills_devops'>
          <h3>Cloud & DevOps</h3>
          <p className='skills_category_intro'>Reliable delivery, cloud platforms, and automation</p>
          <div className='skills_content'>
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details_icon' />
              <div>
                <h4>Docker/K8s</h4>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details_icon' />
              <div>
                <h4>GCP</h4>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details_icon' />
              <div>
                <h4>Git/Maven/Agile</h4>
              </div>
            </article>
          </div>
        </div>

        <div className='skills_data'>
          <h3>Data & Streaming</h3>
          <p className='skills_category_intro'>Event-driven systems, persistence, and data flow</p>
          <div className='skills_content'>
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details_icon' />
              <div>
                <h4>Kafka/RabbitMQ</h4>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details_icon' />
              <div>
                <h4>MySQL/NoSQL</h4>
              </div>
            </article>
            <article className='skills_details'>
              <BsPatchCheckFill className='skills_details_icon' />
              <div>
                <h4>Hibernate/JPA</h4>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills