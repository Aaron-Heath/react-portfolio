import React from 'react'
import SectionTitle from '../../SectionTitle'
import ProjectCard from '../ProjectCard';
import Name from '../../brand/Name'
import PROJECTS from '../../projects/projects.json'
import TextScroller from '../../TextScroller';

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
    <div id="proj-content" className='row'>
      <aside className='col-6' style={styles.aside}>
        <div id="project-aside">
          <Name inline={true}/>
          <h4>Software Engineer</h4>
          <TextScroller/>
        </div>
      </aside>
      <div className='col-sm-12 col-md-6' id="proj-main" style={styles.projects}>
        <ul>
        {PROJECT_CARDS}
        </ul>

      </div>
    </div>
  )
}
