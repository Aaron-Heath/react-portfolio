import React from 'react'
import './projects.css'

export default function ProjectCard({project}) {
    const styles = {
        cards: {
            // border:"2px solid blue",
            // minHeight: "200px",
            margin:"20px 0",
            borderRadius: ".5rem",
        },
        links: {
            marginBottom: "5px"
        },
        cardDescription: {
            // color: "rgb(173, 173, 173)",
            color: "var(--bluegrey)"
        }
    }

    const TAGS = []
    for (let tag of project.tags) {
        TAGS.push(<li className="project-tag">{tag}</li>)
    }

    // Replace screenshot if null
    if (!project.screenshot) {
        project.screenshot = "https://placehold.co/600x400/EEE/31343C"
    };

    // Set up project links
    const projectLinks = [];
    if(project.link && project.repository){
        projectLinks.push(<a className='link-pop' href={project.link} rel="noopener noreferrer" target='_blank'><b>LIVE</b></a>);
        projectLinks.push(" | ");
        projectLinks.push(<a className='link-pop' href={project.repository} rel="noopener noreferrer" target='_blank'>Repo</a>);
    } else if (project.link) {
        projectLinks.push(<a className='link-pop' href={project.link} rel="noopener noreferrer" target='_blank'><b>LIVE</b></a>);
    } else if (project.repository) {
        projectLinks.push(<a className='link-pop' href={project.repository} rel="noopener noreferrer" target='_blank'>Repo</a>);
    };


    // let link;
    // link = project.link ? project.link : project.repository;

return (
    <div className='cardv2' style={styles.cards}>
        <a href={project.repository} rel="noopener noreferrer" target='_blank'>
        <div className='row'>
            <div className='col-3'>
                <img className='proj-img' src={project.screenshot}></img>
            </div>
            <div className="col-9">
                
                <h3 className='project-title'>{project.title}</h3>
                <p style={styles.links}>{projectLinks[0]}{projectLinks[1]}{projectLinks[2]}</p>
                <p style={styles.cardDescription}>{project.description}</p>
                <ul>
                    {TAGS}
                </ul>

            </div>
        </div>
        </a>
    
    </div>
)
}
