import React from 'react';
import './App.css';
import { Button, Navbar } from 'react-bootstrap';
import Header from './Components/Header';
import Name from './Components/Name'
import Link from './Components/Link';
import FeatureCard from './Components/FeatureCard';
import BioPic from './images/342bb528-6b35-4cab-aec3-6a8fe0c4f7c4.png'

let App = () => {

  let featureHeader = "INTRODUCTION"
  let featureTitle = "Full Stack Web Developer, Software Engineer"
  let featureText = "My path to web development and software engineering began with 12 hour nights at a 911 Center in Montgomery County, Pennsylvania..."
  let featureId = "bio-feature"

  let featureOptions = {
    header: featureHeader,
    title: featureTitle,
    text: featureText,
    id: featureId,
    link: null
  }


  return (
    <>
    <Header></Header>
    <main class="container">
      <div class="row">
        <div class="row col-md-8">
          <div class="col-md-6">
            <Name inline={false} />
            <div id="socials">
              <Link href={"https://github.com/Aaron-Heath"} text="Github"/>  |  <Link href="https://www.linkedin.com/in/aaron-heath-2b0a5510b/" text="LinkedIn"/>

            </div>
            <Button id="contact-btn" variant="contact">CONTACT ME</Button>
          </div>
          <div class="col-md-6">
            <img alt="Aaron Heath Portfolio Picture" src={BioPic} id="bio-pic"></img>
          </div>
        </div>
        <div class ="col-md-4">
          <FeatureCard header={featureHeader} text={featureText} title={featureTitle} id={featureId} link="#"></FeatureCard>
        </div>
        
      </div>
    </main>
    </>
  );
}

export default App;
