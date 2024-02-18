import React from 'react'
import './projects.css'

export default function ProjectCard({project}) {
    const styles = {
        cards: {
            // border:"2px solid blue",
            // minHeight: "200px",
            margin:"20px 0"
        },
    }

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

        $target.setAttribute('style',`height:${$target.offsetHeight}px`);

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

                        $image.setAttribute('style',`height:${$image.offsetHeight}px`);
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

    // Replace screenshot if null
    if (!project.screenshot) {
        project.screenshot = "https://placehold.co/600x400/EEE/31343C"
    };

    let link;
    link = project.link ? project.link : project.repository;

//   return (
    
//         <div onMouseEnter={handleHover} className='project-card col-3' /*style={{height: "344px"}}*/>
//             <div className="row project-img">
//                 {/* Image Goes here */}
//                 <img src={project.screenshot} alt="placeholder"/>
//             </div>
//             <div className='row project-data'>
//                 <div className="row project-title">
//                 <a href={link} target="_blank" rel="noopener noreferrer"><h4>{project.title}</h4></a>
//                 </div>

//                 <div className='row project-description'>
//                     <p>{project.description}</p>
//                     <p><a href={project.repository}>Repo</a> | <a href={project.link}>LIVE</a></p>
//                 </div>

//                 <div className='row project-tags'>
//                     <ul>Tags: {TAGS}</ul>
//                 </div>
//             </div>
//         </div>
//   )
return (
    <div className='cardv2' style={styles.cards}>
        <div className='row'>
            <div className='col-3'>
                <img className='proj-img' src={project.screenshot}></img>

            </div>
            <div className="col-9">
                <h3 className='project-title'>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                    {TAGS}
                </ul>
            </div>
        </div>
    
    </div>
)
}
