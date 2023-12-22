import React from 'react'
import './projects.css'

export default function ProjectCard({project}) {

    // Handle hover animation
    const handleHover = function(event) {
        event.stopPropagation();

        const $target = event.currentTarget;

        // Get classes
        const classes = [...$target.classList];
        // Return if currenTarget is not project-card
        if (!classes.includes('project-card')){
            return;
        }
        let imgFound;

        // traverse dom down to img-container
        for(let $child of $target.children) {
            console.log($child);
            
            // Find project-img container 
            if ([...$child.classList].includes('project-img')){

                // Find img
                for(let $image of $child.children) {
                    // console.log($image.tagName);
                    if($image.tagName.toLowerCase() == "img") {
                        console.log(`Img is: ${$image}`);
                        imgFound = true;

                        $image.setAttribute('style',`height:${$image.offsetHeight}`);
                        return;
                    }
                }

                // Do logic on img

                
            };
        }

        // Throw error if no img
        if(!imgFound) {
            throw new Error("img element not found.");
        }

        
        
    }



    const TAGS = []
    for (let tag of project.tags) {
        TAGS.push(<li className="project-tag">{tag}</li>)
    }

    // Replace link if null
    if (!project.link) {
        project.link = "https://placehold.co/600x400/EEE/31343C"
    };

  return (
    <div onMouseEnter={handleHover} className='project-card col-4'>
        <div className="row project-img">
            {/* Image Goes here */}
            <img src={project.link} alt="placeholder"/>
        </div>
        <div className='row project-data'>
            <div className="row project-title">
                <h4>{project.title}</h4>
            </div>

            <div className='row project-description'>
                <p>{project.description}</p>
            </div>

            <div className='row project-tags'>
                <ul>Tags: {TAGS}</ul>
            </div>
        </div>
    </div>
  )
}
