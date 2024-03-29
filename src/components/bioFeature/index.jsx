import React from 'react'

import { Button, Navbar } from 'react-bootstrap';
import Name from '../brand/Name'
import Link from '../Link';
import FeatureCard from '../FeatureCard';
import BioPic from '../../images/342bb528-6b35-4cab-aec3-6a8fe0c4f7c4.png'

export default function BioFeature() {
    let featureHeader = "INTRODUCTION"
    let featureTitle = "Full Stack Web Developer, Software Engineer"
    let featureText = "My path to web development and software engineering began with 12 hour nights at a 911 Center in Montgomery County, Pennsylvania..."
    let featureId = "bio-feature"

    function handleClick(event) {
      console.log(event.target)
      if(!event.target.matches("button")) {
        return;
      }

      if(event.target.matches("#contact-btn")) {
        window.location="/contact"
      }
      
    }
    
  return (
    <div className="row">
        <div className="row col-md-8">
          <div className="col-md-6">
            <Name inline={false} />
            <div id="socials">
              <Link href={"https://github.com/Aaron-Heath"} text="Github"/>  |  <Link href="https://www.linkedin.com/in/aaron-heath-2b0a5510b/" text="LinkedIn"/>

            </div>
            <Button id="contact-btn" variant="contact" onClick={handleClick}>CONTACT ME</Button>
          </div>
          <div className="col-md-6" id="bio-pic-container">
            <img alt="Aaron Heath Portfolio Picture" src={BioPic} id="bio-pic"></img>
          </div>
        </div>
        <div className ="col-md-4">
          <FeatureCard header={featureHeader} text={featureText} title={featureTitle} id={featureId} link="#"></FeatureCard>
        </div>
        
      </div>
  )
}
