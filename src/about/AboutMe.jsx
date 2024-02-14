import React from 'react'

import './about.css'
import SectionTitle from '../components/SectionTitle'

export default function AboutMe() {
  const styles = {
    h4Header: {
      color: "var(--accentgold)",
      marginTop: "20px"
    },
    icons: {
      size: "60px"
    },
  }

  return (
    <div className='row section-row' id='about-section'>
      <SectionTitle title={"About Me"}></SectionTitle>
      <div className='col-md-4'>
        <h4 style={styles.h4Header}>Languages</h4>
        <div>
            <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/java/java-original-wordmark.svg" width={styles.icons.size} height={styles.icons.size} alt="Java" title="Java"/>
            <img  src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/python/python-original-wordmark.svg" height={styles.icons.size} width={styles.icons.size} alt="Python" title="Python"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/javascript/javascript-original.svg" width={styles.icons.size} height={styles.icons.size} alt="JavaScript" title="JavaScript"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/html5/html5-original.svg" width={styles.icons.size} height={styles.icons.size} alt="HTML" title="HTML"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/css3/css3-original.svg" width={styles.icons.size} height={styles.icons.size} alt="CSS" title="CSS"/>
        </div>
        <h4 style={styles.h4Header}>Tools</h4>
        <div>
            <img  src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/react/react-original-wordmark.svg" width={styles.icons.size} height={styles.icons.size} alt="React" title="React"/>
            <img  src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/spring/spring-original-wordmark.svg" width={styles.icons.size} height={styles.icons.size} alt="Spring" title="Spring"/>
            <img  src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/dropwizard/dropwizard-original.svg" width={styles.icons.size} height={styles.icons.size} alt="Dropwizard" title="Dropwizard"/>
            {/* <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/express/express-original-wordmark.svg" width={styles.icons.size} height={styles.icons.size} alt="Express" title="Express"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/handlebars/handlebars-original-wordmark.svg" width={styles.icons.size} height={styles.icons.size} alt="Handlebars" title="Handlebars"/> */}
            <img  src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/sequelize/sequelize-original.svg" width={styles.icons.size} height={styles.icons.size} alt="Sequelize" title="Sequelize"/>
            <img  src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/mysql/mysql-original-wordmark.svg" width={styles.icons.size} height={styles.icons.size} alt="MySQL" title="MySQL"/>
            <img  src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/postgresql/postgresql-original.svg" width={styles.icons.size} height={styles.icons.size} alt="Postgresql" title="Postgresql"/>
        </div>
      </div>
      <div className='col-md-8'>
        <p>My path to web development and software engineering began with 12 hour nights at a 911 Center in Montgomery County, Pennsylvania. What started as a hobby and budding interest quickly snowballed  into a love and passion for coding, fueling my self-guided learning for several years.</p>
        <p>In that time, I've grappled with <b>C</b>, developed full stack web applications using <b>Python's</b> <b>Django</b> and <b>Flask</b> frameworks and <b>JavaScript's ExpressJS</b>. Wanting to better understand backend development, I moved to <b>Java</b>, building application APIs, implementing user authentication and CRUD operations using both <b>Spring</b> and <b>Dropwizard</b>.</p>
        <p>In September of 2023, I took the step to officially launch my career transition by enrolling in University of Pennsylvania's coding bootcamp, to build upon the skills I developed on my own in preparation for developing software and services professionally.</p>
      </div>
    </div>
  )
}
