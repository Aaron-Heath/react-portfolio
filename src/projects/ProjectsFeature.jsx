import React from 'react'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from './ProjectCard';
import PROJECTS from './projects.json'

export default function ProjectsFeature() {
  // Read project info into memory
  // const PROJECTS = require('./projects.json');
  const PROJECT_CARDS = []

  for (let project of PROJECTS) {
    PROJECT_CARDS.push(<ProjectCard project={project}></ProjectCard>);
  }

  return (
    <div id="project-section">
      <SectionTitle title={"Projects"}/>
      <div className='row d-flex justify-content-around'>
        {PROJECT_CARDS}
      </div>
    </div>
  )
}
