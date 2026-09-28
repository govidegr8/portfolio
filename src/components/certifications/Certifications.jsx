import React from 'react'
import './certifications.css'

const Certifications = () => {
  return (
    <section id='certifications'>
      <h5>My Qualifications</h5>
      <h2>Education & Certifications</h2>
      <div className='container certifications_container'>
        <div className='education_card'>
          <h3>B.Tech, Computer Science</h3>
          <h5 className='text-light'>College of Engineering Kallooppara (KTU), Kerala</h5>
          <small className='text-light'>2017-2021</small>
        </div>
        
        <div className='certifications_list'>
          <h3>Certifications</h3>
          <ul>
            <li>Neo4j Certified Professional (Neo4j)</li>
            <li>Kafka & Zookeeper Certification (Scaler)</li>
            <li>Spring Security Certification (Amigos Code)</li>
            <li>IBM AI Engineering Certification (Coursera)</li>
            <li>Full Stack Java Developer (Udemy)</li>
            <li>Google Cloud Compute Engine (Coursera)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Certifications