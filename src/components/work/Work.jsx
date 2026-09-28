import React from 'react'
import './work.css'
import {BiBriefcase} from 'react-icons/bi'

const Work = () => {
  return (
    <section id='work'>
      <h5>My Career Path</h5>
      <h2>Work Experience</h2>
      <div className='container work_container'>
        <div className='work_card'>
          <div className='work_header'>
            <BiBriefcase className='work_icon'/>
            <div>
              <h3>Senior Software Engineer</h3>
              <h5 className='text-light'>Trenser Technology Solutions(P) Ltd | Trivandrum</h5>
              <small className='text-light'>May 2025 - Present</small>
            </div>
          </div>
          <ul className='work_list'>
            <li>Led the end-to-end architecture of an AI-driven X-ray reporting viewer, leveraging Python AI agents and Google Vertex AI (Gemini) to automate clinical findings, reducing radiologist manual documentation time by 70%.</li>
            <li>Engineered high-throughput microservices using Java Spring Boot and dcm4che to orchestrate DICOM operations (WADO/STOW), successfully migrating 100k+ medical studies to Google Cloud Healthcare API stores.</li>
            <li>Built a Cardiac Echo Viewer using a Micro-frontend approach using Reactjs, increasing modularity and enabling the seamless integration of US2AI analysis via iframes.</li>
            <li>Optimized legacy data migration by developing Spring Data ingestion pipelines that parsed complex PDF/CSV datasets, improving data processing reliability and population of PostgreSQL tables.</li>
          </ul>
        </div>

        <div className='work_card'>
          <div className='work_header'>
            <BiBriefcase className='work_icon'/>
            <div>
              <h3>Software Developer</h3>
              <h5 className='text-light'>Adeptus Technologies LLC | Remote</h5>
              <small className='text-light'>Jan 2024 - May 2025</small>
            </div>
          </div>
          <ul className='work_list'>
            <li>Upgraded the application from Spring Framework to Spring Boot, reducing deployment time by 40% and cutting maintenance overhead.</li>
            <li>Developed an AI-powered bill processing system using Tesseract OCR, increasing workflow efficiency by 20%, reducing manual data entry efforts by 30%, and cutting processing time by 50%.</li>
            <li>Led the migration from Solr & Cassandra to ElasticSearch & Apache Druid, improving query performance and reducing system downtime by 25%.</li>
          </ul>
        </div>

        <div className='work_card'>
          <div className='work_header'>
            <BiBriefcase className='work_icon'/>
            <div>
              <h3>Jr. Software Developer</h3>
              <h5 className='text-light'>Adeptus Technologies LLC | Remote</h5>
              <small className='text-light'>Nov 2021 - Dec 2023</small>
            </div>
          </div>
          <ul className='work_list'>
            <li>Collaborated on a facility management system supporting 500,000+ IoT devices, developing backend services using Java, Spring Boot, CassandraDB, Neo4jDB, and Solr to improve API performance, and building ReactJS and AntD components to enhance UI responsiveness and reduce load times.</li>
            <li>Worked with Apache Karaf, Flume, Flink, and Kafka to support distributed, real-time data processing of millions of events per second, and helped deploy Kafka on Docker and Kubernetes, improving product availability by 75%, reducing operational costs by 20%, and enabling automatic scaling during peak loads.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Work
