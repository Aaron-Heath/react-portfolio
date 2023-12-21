import React from 'react'

export default function ProjectCard({project}) {
    const TAGS = []
    for (let tag of project.tags) {
        TAGS.push(<li class="project-tag">{tag}</li>)
    }
  return (
    <div className='project-card col-4'>
        <div className="row project-img">
            {/* Image Goes here */}
        </div>
        <div className="row project-title">
            <h4>{project.title}</h4>
        </div>
        <div className='row project-description'>
            <p>{project.description}</p>
        </div>
        <div className='row project-tags'>
            <ul>{TAGS}</ul>
        </div>
      
    </div>
  )
}
