import React from 'react'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from './ProjectCard';
import Name from '../components/Name'
import PROJECTS from './projects.json'

export default function ProjectsFeature() {

  const styles = {
    aside: {
      // border:"2px red solid",
      position: "fixed",
      maxHeight: "50vh",
      minHeight:"60vh",
      minWidth: "40%",
    },
    projects: {
      // border:"2px red solid",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center"
    }

  }
  // Read project info into memory
  const PROJECT_CARDS = []

  for (let project of PROJECTS) {
    PROJECT_CARDS.push(<li className='row d-flex justify-content-center'><ProjectCard project={project}></ProjectCard></li>);
  }


  return (
    <div id="proj-content">
      <aside id="project-aside" style={styles.aside}>
        <Name inline={true}/>
        <h4>Software Engineer</h4>
      </aside>
      <div className='col-6' id="proj-main" style={styles.projects}>
        <ul>
        {PROJECT_CARDS}
        </ul>

      </div>
    </div>
  )
}
