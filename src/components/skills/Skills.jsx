import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const skillGroups = [
  {
    className: 'skills_development',
    title: 'Core Development',
    description: 'Backend services, APIs, and frontend delivery',
    skills: ['Java/Spring Boot', 'Microservices', 'React', 'RESTful APIs'],
  },
  {
    className: 'skills_ai',
    title: 'AI & ML',
    description: 'Practical AI features and intelligent workflows',
    skills: ['Generative AI integration', 'Google Vertex AI', 'Agent development'],
  },
  {
    className: 'skills_devops',
    title: 'Cloud & DevOps',
    description: 'Reliable delivery, cloud platforms, and automation',
    skills: ['Docker/Kubernetes', 'Google Cloud', 'Git/Maven/Agile'],
  },
  {
    className: 'skills_data',
    title: 'Data & Streaming',
    description: 'Event-driven systems, persistence, and data flow',
    skills: ['Kafka/RabbitMQ', 'MySQL/NoSQL', 'Hibernate/JPA'],
  },
]

const Skills = () => {
  return (
    <section id='skills'>
      <h5>The Skills I Have</h5>  
      <h2>My Skills</h2>
      <div className='container skills_container'>
        {skillGroups.map(({ className, title, description, skills }) => (
          <div className={className} key={title}>
            <h3>{title}</h3>
            <p className='skills_category_intro'>{description}</p>
            <div className='skills_content'>
              {skills.map((skill) => (
                <article className='skills_details' key={skill}>
                  <BsPatchCheckFill className='skills_details_icon' aria-hidden='true' />
                  <h4>{skill}</h4>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills