import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    Image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
  },
  {
    id:2,
    Image: IMG2,
    title: 'Charts templates & infographics',
    github: 'https://github.com',
  },
  {
    id:3,
    Image: IMG3,
    title: 'Dashboard UI Kit for data design web apps',
    github: 'https://github.com',
  },
  {
    id:4,
    Image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
  },
  {
    id:5,
    Image: IMG5,
    title: 'Charts templates & Infographics',
    github: 'https://github.com',
  },
  {
    id:6,
    Image: IMG6,
    title: 'Charts templates & Infographics',
    github: 'https://github.com',
  }
]
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({id, Image, title, github})=>{
            return(
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item_image'>
                <img src={Image} alt= {title}/>
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item_cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
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