import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'


const data = [
  {
    id:1,
    Image: IMG1,
    title: 'Student Sem Registration Portal (PHP, XAMPP, MySQL)',
    type: 'Web application',
    description: 'A focused portal for managing student semester registration and course workflows.',
    stack: ['PHP', 'MySQL', 'XAMPP'],
    github: 'https://github.com/govidegr8',
  },
  {
    id:2,
    Image: IMG2,
    title: 'ECommerce Platform Microservices',
    type: 'Distributed systems',
    description: 'A service-oriented commerce platform designed around independently deployable backend services.',
    stack: ['Java', 'Spring Boot', 'Microservices'],
    github: 'https://github.com/govidegr8',
  }
]
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className='container portfolio_container'>
        {
          data.map(({id, Image, title, type, description, stack, github})=>{
            return(
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item_image'>
                <img src={Image} alt={title} loading="lazy" decoding="async" />
              </div>
              <p className='portfolio_item_type'>{type}</p>
              <h3>{title}</h3>
              <p className='portfolio_item_description'>{description}</p>
              <ul className='portfolio_item_stack' aria-label={`${title} technology stack`}>
                {stack.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              <div className='portfolio_item_cta'>
                <a href={github} className='btn' target='_blank' rel="noreferrer">View on GitHub</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio